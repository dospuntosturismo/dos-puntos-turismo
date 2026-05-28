import Card from '@components/Card'
import React from 'react'

const Prueba = () => {
  const arrayPrueba = [
    {
      id: 1,
      title: 'Patagonian Ice Fields',
      info: 'An epic 8-day expedition across the massive Perito Moreno and Upsala glaciers with expert mountain guides.',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJAp397lPKDnUiUOi7qB4TrCTo1YlpsRltxdQBcYHOc30U3AfLcHch0BWbtsJfKr933x3cVYum5fYs2sDajja4oZ1GjqZBMdwOGj9xSLLZyjq7VYLf_Q5M2s5brff-u-CjgtxcIKI1j1uZ5fe955uvcrDEFFOWBCCo3j_Pix67JZ4hJCb8AzG2IEcgFiyYkaLGa8UKJ0NFrxsUc866I0qlpifMarZZkJbUxYJvCZCWSurgzRH_jceZ_KhBwJTuLLeQwvfpBQ3_Jkbr",
      price: 2450,
      duration: '8 Days',
      difficulty: 'High Difficulty',
      location: 'Santa Cruz'
    }, {
      id: 2,
      title: 'Seven Lakes Route',
      info: 'A luxury road trip through the heart of the Lake District, staying at exclusive lodges and tasting local delicacies.',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUB9ihxgFDOrUgWwmL--zRi1pz50H2Tzb0Yte8zBVPubYStDnCUZKs9sNilaDzCHmPJafmzYKgM2FV4fdAs2EXDEpO7HoUEfhK7sWxdd42kye3Q0CeUEw_vcXBH8xOeb7lqlxe3EduUReChJqlk548rcNt6W0mfImATJTg6elGzfXY2z6RPB1VcikA-CvJALG647BDlB3qj0yiYIXZw62KwSWl5gjFaTWRoJw0E4gtJeXuI8pAuCTB_GB-Q59Yaxlq4kaN2Kqk9k8V",
      price: 1890,
      duration: '5 Days',
      difficulty: 'Boutique',
      location: 'Neuquén'
    },
    {
      id: 3,
      title: 'Torres del Paine',
      info: 'Complete W-Circuit trekking experience with luxury camping and gourmet meals under the stars.',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdtv6Gynd0E53xnC4Fg15y9AVtpcPv9iZLSMxIZslzPd3U75-e90RQGaeofUilc_AgS39ucRSVD3VEUfOlDXBgXUGoHyCTqiVqwHjUjIUow-RJD8mS4GUDS3TD_bgi0ypSrPh41g-i0bzlt-fgJjUTOZP3yFwpYFSwiRfTDV7z2bl7q25fZEUgQehh-n-TkFrWv3ZOQ6M8G4b2Kr_E1ovqccjU5210bZ1alLHUeskjKVecUwtdy8y8L-JxwF6YZdvjxPXZnc5dEL3X",
      price: 3200,
      duration: '10 Days',
      difficulty: 'Iconic Trek',
      location: 'Chile'
    },
    {
      id: 4,
      title: 'Ushuaia: End of World',
      info: 'Sail the Beagle Channel and explore Tierra del Fuego National Park on this immersive southern journey.',
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7e8YkatS7KVPN-xjS3dRNsig3YokT5OsB92-bLiuxg-j2drotvXu_kAOJdtCpMThiI66ZFjURj5UX48TIfkxPDtn6SMOmLRbutSQlEYodHRNwBx-2yf3HtCDAlQbkrj4ehIKYlZEvySdLPGlTfE8PykhKBPZvFWAP8TXK8tOgXlVLvOq87uBjvsnJiawZSyZKwkcg-rS-nmYLDJ5Fq3OJn6qkpvuDU9z3hJSrnCGD24ktuae7Q-1SkBVWs3s3249EZfhqjGebtTeS",
      price: 1600,
      duration: '4 Days',
      difficulty: 'Heritage',
      location: 'Tierra del Fuego'
    }
  ]
  return (
    <>
    <div className="flex-grow">
      <div className="flex justify-between items-center mb-8">
      <h2 className="text-headline-lg font-headline-lg text-on-background">Explore Our Packages</h2>
      <span className="text-body-md font-body-md text-on-surface-variant">Showing 12 results</span>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
{arrayPrueba.map((item) => (
<Card key={item.id} title={item.title} image={item.image} price={item.price} duration={item.duration} location={item.location} info={item.info} />
))}
</div>
</div>
{/* <div className="mt-stack-lg flex justify-center items-center gap-2">
<button className="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant hover:border-primary text-on-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary text-on-primary font-bold">1</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant hover:border-primary text-on-surface-variant transition-all">2</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant hover:border-primary text-on-surface-variant transition-all">3</button>
<button className="w-10 h-10 rounded-lg flex items-center justify-center border border-outline-variant hover:border-primary text-on-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div> */}
</>
  )
}

export default Prueba
