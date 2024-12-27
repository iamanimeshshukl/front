import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
//import { motion } from 'framer-motion';
import image1 from "../assets/products/dibatic pic.jpg";
import image2 from "../assets/products/femetop.jpg";
import img3 from "../assets/products/gasrelex (2).jpg";
import img4 from "../assets/products/Ocimum.jpg";
import img5 from "../assets/products/fevertop.png";
import img6 from "../assets/products/memory pic.jpg";
import img7 from "../assets/products/heart pic.jpg";
import img8 from "../assets/products/Livecure-DS.png";
import img9 from "../assets/products/mc relex .1.png";
import img10 from "../assets/products/Baby Tonic.jpg";

const products = [
  { id: 1, name: "Annanta Diabetic", price: 120, originalPrice: 120, image: image1, description: "Cures heart problems.", 
    benefits: [
      "Helps control blood pressure",
      "Improves heart function",
      "Balances cholesterol levels",
      "Enhances blood circulation",
      "Aids in hypertension and insomnia",
    ],
    symptoms: [
      "Irregular heartbeats",
      "Chest discomfort",
      "Indigestion",
      "Heartburn",
    ],
    clinicalStudy: "This natural syrup helps to control blood pressure, maintain cholesterol levels, and improve cardiac function. It is anti-stress, antioxidant, strengthens immunity, and improves blood circulation.",
    dosage: "10 to 20ml twice a day diluted in water or as prescribed by a physician.",
    size: "200 ml",
  },
  { id: 2, name: "Annanta Baby Tonic", price: 70, originalPrice: 70, image: img10, description: "Supports baby’s growth and development.", 
    benefits: [
      "Increases appetite",
      "Strengthens bones",
      "Promotes growth",
      "Aids in teething",
      "Improves digestion",
    ],
    symptoms: [
      "Indigestion",
      "Irritability",
      "Teething discomfort",
    ],
    clinicalStudy: "This ayurvedic syrup is effective for growing kids, makes them physically and mentally strong, and increases appetite. Its regular usage strengthens bones and reduces teething irritation.",
    dosage: "10 to 20ml twice a day or as directed by a physician.",
    size: "100 ml",
  },
  { id: 3, name: "Annanta Femetop", price: 145, originalPrice: 145, image: image2, description: "Special formulation for women's health.", 
    benefits: [
      "Cures leucorrhoea",
      "Regulates menstrual cycle",
      "Relieves pelvic pain and swelling",
      "Balances female hormones",
    ],
    symptoms: [
      "Menstrual pain",
      "Depression",
      "Mood swings",
    ],
    clinicalStudy: "Contains 20 herbs like Satavari and Manjistha. Treats disorders naturally without side effects.",
    dosage: "3 teaspoons twice a day with half a cup of water after eating or as directed by a physician.",
    size: "300 ml",
  },
  { id: 4, name: "Annanta Heartbooster", price: 150, originalPrice: 150, image: img7, description: "Helps in maintaining heart health and wellness.", 
    benefits: [
      "Helps control blood pressure",
      "Improves heart function",
      "Maintains cholesterol levels",
      "Enhances blood circulation",
    ],
    symptoms: [
      "Irregular heartbeats",
      "Chest discomfort",
      "Indigestion",
      "Heartburn",
    ],
    clinicalStudy: "This natural syrup helps to control blood pressure, maintain cholesterol levels, and improve cardiac function. It is anti-stress, antioxidant, strengthens immunity, and improves blood circulation.",
    dosage: "10 to 20ml twice a day diluted in water or as prescribed by a physician.",
    size: "200 ml",
  },
  { id: 5, name: "Annanta Fevertop", price: 110, originalPrice: 110, image: img5, description: "Relief from fever and associated symptoms.", 
    benefits: [
      "Improves immunity",
      "Fights fever and infections",
      "Relieves cold and cough",
      "Increases platelet count",
    ],
    symptoms: [
      "Cold and cough",
      "Weak immunity",
      "Weakness",
    ],
    clinicalStudy: "Boosts immunity, increases RBC and platelet count, and alleviates symptoms of fever and weakness naturally.",
    dosage: "10 to 20ml thrice a day with warm water or as prescribed.",
    size: "200 ml",
  },
  { id: 6, name: "Annanta Memory Vitalizer", price: 140, originalPrice: 140, image: img6, description: "Boosts memory and cognitive functions.", 
    benefits: [
      "Reduces mental stress",
      "Enhances learning capabilities",
      "Improves nervous system function",
      "Boosts memory",
    ],
    symptoms: [
      "Lack of sleep",
      "Forgetfulness",
    ],
    clinicalStudy: "Contains herbs like Sankhpushpi and Brahmi to improve brain function and reduce stress.",
    dosage: "10 to 20ml twice a day or as directed by a physician.",
    size: "200 ml",
  },
  { id: 7, name: "Annanta Gasrelax", price: 120, originalPrice: 120, image: img3, description: "Provides relief from gas and bloating.", 
    benefits: [
      "Improves digestion",
      "Enhances bile juice secretion",
      "Relieves hyperacidity",
      "Reduces burning sensation",
    ],
    symptoms: [
      "Heartburn",
      "Indigestion",
      "Loss of appetite",
    ],
    clinicalStudy: "Contains herbs like Amla, Nagarmotha, and Mulethi for effective digestion support.",
    dosage: "3 teaspoons morning and evening with half a cup of water after meals or as directed by a physician.",
    size: "200 ml",
  },
  { id: 8, name: "Annanta Ocimum", price: 65, originalPrice: 80, image: img4, description: "Supports respiratory health and wellness.", 
    benefits: [
      "Relieves allergic or bacterial coughs",
      "Loosens sputum",
      "Relieves asthma, bronchitis, and tuberculosis",
      "Boosts immunity",
    ],
    symptoms: [
      "Sore throat",
      "Runny nose",
    ],
    clinicalStudy: "Formulated with herbs like Mulethi, Adusa, and Anjeer. Treats cold and cough symptoms naturally without side effects.",
    dosage: "Adults: 2 teaspoons thrice a day with warm water. Children: 1 teaspoon morning and evening with warm water.",
    size: "100 ml",
  },
  { id: 9, name: "Annanta MC Relex", price: 160, originalPrice: 160, image: img9, description: "Calm and relaxation supplement for mind and body.", 
    benefits: [
      "Relieves menstrual discomfort",
      "Controls mood swings",
      "Regulates irregular menstruation",
    ],
    symptoms: [
      "Menstrual disorders",
      "Weakness",
    ],
    clinicalStudy: "Ingredients like Ashoka and Grat Kumari balance hormones and restore hemoglobin levels, improving reproductive health.",
    dosage: "Take 3 days before menstruation. 30 minutes before meals or before sleeping. Avoid cold food and water.",
    size: "200 ml",
  },
  { id: 10, name: "Annanta Livcure Ds", price: 130, originalPrice: 130, image: img8, description: "Supports liver function and detoxification.", 
    benefits: [
      "Strengthens the liver",
      "Increases appetite",
      "Relieves constipation",
    ],
    symptoms: [
      "Yellow urination",
      "Hair loss",
    ],
    clinicalStudy: "Combines 17 herbs like Kutaki and Kasoundhi for antioxidant benefits and liver health.",
    dosage: "15ml with half a cup of water after meals or as directed by a physician.",
    size: "200 ml",
  },
];



const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <h1 className="text-center text-red-600 font-bold text-2xl">
        Product Not Found
      </h1>
    );
  }

  // Calculate discounted price
  const discountedPrice = (product.price - product.price * 0.1).toFixed(2);

  // Reset cursor and scroll to top when component mounts
  useEffect(() => {
    document.body.style.cursor = "auto"; // Reset cursor
    window.scrollTo(0, 0); // Scroll to top

    return () => {
      document.body.style.cursor = "auto"; // Reset cursor on unmount
    };
  }, []);

  return (
    <div className="container mx-auto p-10 rounded-lg bg-white">
      <div className="flex flex-wrap items-center">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-auto md:w-1/2 md:h-64 lg:w-1/2 lg:h-80 rounded-lg cursor-pointer"
          />
        </div>

        {/* Right Details */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-teal-600 text-3xl md:text-4xl mb-4">
            {product.name}
          </h1>
          <p className="text-lg font-semibold text-teal-600 my-3">
            ₹{discountedPrice}{" "}
            <span className="text-sm text-gray-500">(10% Off)</span>
          </p>
          <del>
            <p className="text-sm text-gray-600 my-2">₹{product.price}</p>
          </del>
          <p className="text-gray-700 my-4">{product.description}</p>

          <div>
            <h3 className="font-bold text-gray-700 mt-4">Benefits:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-700 mt-4">Symptoms:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {product.symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 my-4">{product.clinicalStudy}</p>
          <p className="text-gray-600 my-4">
            <strong>Dosage:</strong> {product.dosage}
          </p>
          <p className="text-gray-600 my-4">
            <strong>Size:</strong> {product.size}
          </p>

          <a
            href="tel+919839175313"
            className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 mt-4 block text-center cursor-pointer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
