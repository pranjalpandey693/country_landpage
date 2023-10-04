/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage:{
        globe: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80')"
       , globe2:"url('https://media.istockphoto.com/id/1142490213/vector/world-map.jpg?s=1024x1024&w=is&k=20&c=o65jerWp8IExz25wVQ5cw1jFV7Ia4TtG1t-lS352fRY=')"
     },
     content:{
      link: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80')"
  
     }
      
    },
  },
  plugins: [],
}