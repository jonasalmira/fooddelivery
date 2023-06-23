import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// import blockContent from './blockContent'
// import category from './category'
import restaurant from './restaurant'
// import author from './author'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([restaurant]),
})
