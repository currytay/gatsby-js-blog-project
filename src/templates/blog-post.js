import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Layout>
      <PageContainer>
        <TitleText>{post.title}</TitleText>
        <DateText>Posted on {post.date}</DateText>
        <ContentContainer dangerouslySetInnerHTML={{ __html: post.content }} />
      </PageContainer>
    </Layout>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleText = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 2rem 0;
`;

const DateText = styled.p`
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0 0 4rem 0;
  color: #959697;
`;

const ContentContainer = styled.div`
  max-width: 45rem;
  line-height: 2rem;
  margin: 0 0 2rem 0;
  font-size: 1.125rem;
`;

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "DD MMM YYYY")
      }
    }
  }
`