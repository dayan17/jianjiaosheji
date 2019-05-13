module.exports={
  devServer:{ 
    proxy:{
      '/recommend':{
        target:'https://m.wowdsgn.com',
        //ws:true,
        changeOrigin:true
      },
      '/foo':{
        target:'<other_url>'
      },
      '/registers':{
        target:'http://10.2.156.229:3000',
        changeOrigin:true
      },
      '/logins':{
        target:'http://10.2.156.229:3000',
        changeOrigin:true
      },
      '/checktoken':{
        target:'http://10.2.156.229:3000',
        changeOrigin:true
      },
<<<<<<< HEAD
      '/pages':{
        target:'https://m.wowdsgn.com',
        changeOrigin:true
=======
      '/v2': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
>>>>>>> 31cefccae2f7093b0209b203d81b6e2b07073962
      }
   
    }
  }
}