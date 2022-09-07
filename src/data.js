const data = {
  topProduct:[
    '1589','296','5','4','3'
  ],
  categorie: [
    {
      _id: '1',
      title: 'Informatiques',
      sous_cat: [
        {
          _id: '187',
          title: 'Ordinateur Portable',
          types: [
            {
              _id: '123',
              title: 'Pc Portable'
            },
            {
              _id: '2',
              title: 'Pc Portable'
            }],



        },
        {
          _id: '2',
          title: 'Accessoires et Périphériques',
          types: [
            {
              _id: '1',
              title: 'Casque & Écouteurs'
            },
            {
              _id: '2',
              title: 'Sacoche & Sac À Dos'
            }],



        },
        {
          _id: '2',
          title: 'Accessoires et Périphériques',
          types: [
            {
              _id: '144',
              title: 'Casque & Écouteurs'
            },
            {
              _id: '2',
              title: 'Sacoche & Sac À Dos'
            }],



        }

      ]

    },
    {
      _id: '3',
      title: 'Téléphonie & Tablette',
      sous_cat: [

        {
          _id: '187',
          title: 'Téléphonie Portable',


        },
        {
          _id: '157',
          title: 'Smartphone',
        }
      
      ]

    },
    {
      _id: '3',
      title: 'Montres',
      sous_cat: [
        {
          _id: '1',
          title: 'Swatch',



        },
        {
          _id: '2',
          title: 'Casio',
        },
        {
          _id: '3',
          title: 'tissot',
        },
        {
          _id: '4',
          title: 'Claude Bernard'
        }]

    }

  ],
  
  products: [
    {
      _id: '1589',
      name: 'Pc Portable Asus ',
      category_type: 123,
      image: '/image/dell.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '296',
      name: 'Pc Portable Lenovo',
      category_type: 123,
      image: '/image/dell.jpg',
      price: 15,
      countInStock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '3',
      name: 'Lacoste Free Shirt',
      category_type: 144,
      image: '/images/p3.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Lacoste',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      _id: '4',
      name: 'Nike Slim Pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      _id: '5',
      name: 'Puma Slim Pant',
      category: 'Pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      _id: '6',
      name: 'Adidas Fit Pant',
      category: 'Pants',
      image: '/images/p6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;