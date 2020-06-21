import React from "react"
import { StaticQuery, graphql } from "gatsby"
import logo from "../../static/assets/logo_v2_site.png"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className="hero-header">
        <img src={logo} alt=""></img>
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content" dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description, }} />
        <div>
          <a href="mailto:dentistadev@gmail.com">
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              📧
            </span>
            dentistadev@gmail.com
          </a>
        </div>
      </div>
    )}
  />
);