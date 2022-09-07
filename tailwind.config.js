/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
            spacing: {
        '60px': '60px',
    
      }, 
         fontSize: {
      
      },
      colors:{
        'my-1':"#4b4870",
        'my-2':"#454360",
        'my-3':"#ff4c60",
        'my-4':"#F9F9FE",
        'my-5':'#596172',
        'my-6':"#ff486a"
      },
      fontFamily:{
        sans:['iransans'],
        sansulratlight:['irUltraLight'],
        sanslight:['irLight'],
        sansmedium:['irMedium']
      },
      fontSize:{
        '14':'14px',
        '15':'15px',
        '17': '17px',
        '40':'40px'
      },
      boxShadow:{
        'md':"0px 2px 3px 0px rgb(0 0 0 / 7%)"
      }
    },
   
  },
  plugins: [],
}


// npx tailwindcss -i ./public/input.css -o ./dist/style.css --watch
