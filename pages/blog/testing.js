import matter from 'gray-matter' 
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

export default function BlogTemplate(props) { 
  return (
    <Layout siteTitle={props.siteTitle}>
      <article>
        <h1> {props.frontmatter.title}</h1>
          <div>
            <ReactMarkdown source={props.markdownBody}/>
          </div>
      </article>
    </Layout>
  )
}

export async funciton getStaticProps({ ...ctx }) { 
  const {slug} = ctx.params
  const content = await import()
} 
