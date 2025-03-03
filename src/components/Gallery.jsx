import React from 'react';

const Gallery = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl text-pink-600 font-bold text-center mb-8">
        What We Bring to You
        </h1>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large item */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://media.istockphoto.com/id/1300288354/vector/beautiful-dreaming-women-with-flowers-in-hair-relaxed-happy-girls-in-meditation-calmness.jpg?s=612x612&w=0&k=20&c=spcTovfgpmpyZqxZ91EXMEoc_Xh0RVCtO4cqbWica2s="
              alt="Women Healthcare"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">Women's Health</h3>
                <p className="text-white">Caring for women at every stage of life</p>
              </div>
            </div>
          </div>
          {/* Small items */}
          {[ 
            { label: 'Maternity Care', url: 'https://media.istockphoto.com/id/1361721572/vector/pregnant-woman-011.jpg?s=612x612&w=0&k=20&c=wvkK0yTOb43-d_Qo6Kxr79sxBzOet6gKhMyima4XGDA=' },
            { label: 'Mental Health', url: 'https://media.istockphoto.com/id/1326112129/vector/african-american-woman-feels-anxiety-and-emotional-stress-depressed-black-girl-experiences.jpg?s=612x612&w=0&k=20&c=x234r0mREpDKJKG-D3y3IH3UeIs6NVAkV7IAA4ETf3M=' },
            { label: 'Physical Fitness', url: 'https://media.istockphoto.com/id/1241718659/vector/metabolic-process-of-woman-on-diet.jpg?s=612x612&w=0&k=20&c=rhDSZP2In_C69gjslMN9KTkp2pjGje-UDjgsIfoF7s4=' },
            { label: 'Nutrition', url: 'https://media.istockphoto.com/id/1420261732/vector/vegetarian-woman-enjoy-eating-salad.jpg?s=612x612&w=0&k=20&c=TQ8vN63ITsQmgP6cozTP6srvJls5advGNu6FRyJ9tp8=' },
            { label: 'Breast Cancer Awareness', url: 'https://media.istockphoto.com/id/1383621084/vector/breast-cancer-concept.jpg?s=612x612&w=0&k=20&c=v8iIYvbuMPMC9nGXiud1s4hrdKh7H1FvX-j2kO4p6Ws=' },
            { label: 'Self-Care', url: 'https://media.istockphoto.com/id/1819812294/vector/self-love-mental-health-woman-holding-watering-can-to-water-flowers-growing-from-head.jpg?s=612x612&w=0&k=20&c=8dkJHQrx9Xl7SB2i8HymMqalb7v-H2nYd-itNEm5lLk=' },
            { label: 'Gynecological Care', url: 'https://media.istockphoto.com/id/1193121403/vector/vector-modern-flat-doctor-and-patient-character-illustration-female-medic-and-woman-on.jpg?s=612x612&w=0&k=20&c=QWlY74_oX04UaiCz4jCIpTy_BZFJB8OaP9ZikLF2BuE=' },
            { label: 'Wellness', url: 'https://media.istockphoto.com/id/1134958683/vector/woman-sitting-in-lotus-position-practicing-meditation-yoga-girl.jpg?s=612x612&w=0&k=20&c=TvBTCIj3qGaOQ1advNMLCGMxlpAn19k8L-CNjest95M=' },
          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group w-full h-60">
            <img
              src={item.url}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <h4 className="text-xl font-bold text-white">{item.label}</h4>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;