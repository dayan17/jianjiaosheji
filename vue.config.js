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
      '/information':{
        target:'http://10.2.156.229:3000',
        changeOrigin:true
      },
      '/pages':{
        target:'https://m.wowdsgn.com',
        changeOrigin:true
      },
      '/v2': {
        target: 'https://m.wowdsgn.com',
        changeOrigin: true
      }
   
    }
  }
}