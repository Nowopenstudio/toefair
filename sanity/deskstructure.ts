export const myStructure = (S:any,context:any) =>
    S.list()
      .title('Content')
      .items([
        S.listItem()
          .title('Info')
          .child(S.document().title('Info').schemaType('home').documentId('home')),
         
  
          ...S.documentTypeListItems().filter(listItem => !['home'].includes(listItem.getId())),
  
  
    
    
  ])