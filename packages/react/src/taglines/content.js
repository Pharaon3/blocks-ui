/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ControlType, applyPropertyControls } from 'property-controls'

const TaglineContent = ({ textAlign = 'left', ...props }) => (
  <section
    sx={{
      px: 2,
      py: [3, 4, 5],
      textAlign
    }}
    {...props}
  />
)

TaglineContent.Container = props => (
  <section
    sx={{
      maxWidth: 'container',
      mx: 'auto'
    }}
    {...props}
  />
)

TaglineContent.Heading = ({ children, ...props }) => (
  <h3
    sx={{
      m: 0,
      fontSize: [3, 4, 6],
      lineHeight: 'heading',
      fontWeight: 'heading'
    }}
    {...props}
  >
    {children}
  </h3>
)

TaglineContent.Paragraph = props => (
  <p
    sx={{
      mt: 0,
      mb: 3,
      fontSize: 3,
      lineHeight: 'body',
      fontWeight: 'body'
    }}
    {...props}
  />
)

applyPropertyControls(TaglineContent, {
  textAlign: {
    type: ControlType.Enum,
    options: ['left', 'center', 'right']
  },
  sx: {
    type: ControlType.Style
  }
})

applyPropertyControls(TaglineContent.Container, {
  textAlign: {
    type: ControlType.Enum,
    options: ['left', 'center', 'right']
  },
  sx: {
    type: ControlType.Style
  }
})

applyPropertyControls(TaglineContent.Heading, {
  as: {
    title: 'Element Type',
    type: ControlType.Enum,
    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },
  children: {
    title: 'Text',
    type: ControlType.String
  },
  sx: {
    type: ControlType.Style
  }
})

applyPropertyControls(TaglineContent.Paragraph, {
  as: {
    title: 'Element Type',
    type: ControlType.Enum,
    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  },
  children: {
    title: 'Text',
    type: ControlType.String
  },
  sx: {
    type: ControlType.Style
  }
})

TaglineContent.usage = `
  <TaglineContent>
    <TaglineContent.Container>
      <TaglineContent.Heading>
        Title
      </TaglineContent.Heading>
      <TaglineContent.Paragraph>
        Some paragraphs here.
        Some paragraphs here.
        Some paragraphs here.
        Some paragraphs here.
        Some paragraphs here.
        Some paragraphs here.
      </TaglineContent.Paragraph>
      <TaglineContent.Paragraph>
        This is another paragraph.
        This is another paragraph.
        This is another paragraph.
      </TaglineContent.Paragraph>
    </TaglineContent.Container>
  </TaglineContent>
`

export default TaglineContent
