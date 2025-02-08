import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStructure } from './deskstructure'

export default defineConfig({
  name: 'default',
  title: 'toefair',

  projectId: 'xdsmiumu',
  dataset: 'production',

  plugins: [structureTool({
    structure: myStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
