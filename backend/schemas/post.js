export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{
        name: 'tag',
        title: 'Tag',
        type: 'string'
      }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'categories',
    //     title: 'Categories',
    //     type: 'array',
    //     of: [{type: 'reference', to: {type: 'category'}}],
    //   },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: "wheelchairAccess",
        title: "Wheelchair Accessibility",
        type: "string",
        options: {
          list: [{
            value: "Wheelchair Accessible",
            title: "Wheelchair Accessible"
          },
          {
            value: "Partially Wheelchair Accessible",
            title: "Partially Wheelchair Accessible"
          },
          {
            value: "NOT Wheelchair Accessible",
            title: "NOT Wheelchair Accessible"
          },
        ],
      },
    },
      {
        name: "toiletFacilities",
        title: "Toilet Facilities",
        type: "string",
        options: {
          list: [{
            value: "Toilet Facilities Available",
            title: "Toilet Facilities Available"
          },
          {
            value: "NO Toilet Facilities Available",
            title: "NO Toilet Facilities Available"
          },
        ],
      },
    },
    {
      title: "Useful Links",
      name: "usefulLinks",
      type: "array",
      of: [{
        type: "singleUsefulLink"
      }]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`,
  //     })
  //   },
  // },
}
