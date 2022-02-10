import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/index.css';
import styled from 'styled-components';

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title='home' />
      <PageContainer>
        <PageText>Latest Updates</PageText>
        <SubtitleText>
          All the latest news and updates about the product, the company, and the team
        </SubtitleText>
        <PostsContainer>
          {data.allWpPost.nodes.map(node => (
            <ArticleContainer key={node.slug}>
              <Link to={node.slug}>
                <ArticleImage src={node.featuredImage.node.sourceUrl} />
                <ArticleTitleText>{node.title}</ArticleTitleText>
              </Link>
              {/* <div dangerouslySetInnerHTML={{ __html: node.excerpt }} /> */}
            </ArticleContainer>
          ))}
        </PostsContainer>
      </PageContainer>
    </Layout>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageText = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin: 2rem 0;
  text-align: center;
`;

const SubtitleText = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 4rem 0;
  text-align: center;
  color: #959697;
  max-width: 25rem;
  line-height: 2rem;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // grid-template-rows: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 4rem;
  margin: 0 0 4rem 0;

  @media only screen and (max-width: 880px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    // grid-template-row: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ArticleContainer = styled.div`
  transition: all .4s ease;

  :hover {
    color: #26b37E !important;
    transform: scale(.96);
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  max-width: 312px;
  object-fit: cover;
  height: 12.25rem;
  border-radius: .75rem;
`;

const ArticleTitleText = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0 0;
  max-width: 312px;
  color: #FFF;
`;

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC  }) {
      nodes {
        title
        excerpt
        slug
        featuredImage {
          node {
            altText
            title
            sizes
            sourceUrl
          }
        }
      }
    }
  }
`
