import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Img from 'gatsby-image';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Link to="/index2">Link</Link>
        <Bio />

        <section id="hero">
          Hero
        </section>
        <section id="thoughts">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </section>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">

              </div>
              <div className="col-md-6">
                <h2>Who am I</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, id molestiae repellendus similique hic perspiciatis esse tempore distinctio officiis alias enim harum? Modi illum ad sint suscipit perferendis? Dicta placeat minima ipsam possimus deserunt sint soluta labore? Ea, voluptatem. Quisquam dolores ab, cum quo at dignissimos distinctio voluptas laborum suscipit!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ipsa quod repellat tempore cum error quis officia necessitatibus eveniet sunt iste laborum deserunt voluptatibus earum consequuntur doloremque veritatis enim sed, est placeat magni veniam quisquam commodi. Fugit necessitatibus maxime quibusdam!</p>
              </div>
            </div>
          </div>
        </section>
        <section id="principles">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3">
                <h2>What guides my work</h2>
                <p>I believe in Design as a problem-solving tool, helping us to achieve a desired result. I believe in the user's experience and needs as guiding points of the design project, allied to a clear business objective and a relevant value-added proposal.</p>
                <p>This understanding align with three principles that are applied in everything I do.</p>
              </div>
              <div className="col-md-7">
                <div className="principle">
                  <h4>Principle</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae reiciendis natus omnis eligendi iusto consequatur repellat aliquid, culpa quae incidunt ea ullam dolor velit magnam, ipsum maxime eum fugiat dolorem.</p>
                </div>
                <div className="principle">
                  <h4>Principle</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae reiciendis natus omnis eligendi iusto consequatur repellat aliquid, culpa quae incidunt ea ullam dolor velit magnam, ipsum maxime eum fugiat dolorem.</p>
                </div>
                <div className="principle">
                  <h4>Principle</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae reiciendis natus omnis eligendi iusto consequatur repellat aliquid, culpa quae incidunt ea ullam dolor velit magnam, ipsum maxime eum fugiat dolorem.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>My work</h2>
                <p>In 10 years, I've worked in a lot of design disciplines, as Graphic, Editorial and Product Design. Here is some examples of this experience.</p>

              </div>
            </div>
          </div>
        </section>
        <section id="share">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Share</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h3>Thoughts</h3>
              </div>
              <div className="col-md-6">
                <h3>Thoughts</h3>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
