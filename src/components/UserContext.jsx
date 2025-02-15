import React ,{createContext, useState, useContext} from "react";

const UserContext = createContext();

export const useUserContext = ()=> useContext(UserContext)

export const UserProvider = ({children})=>{
  
    const [showNav,setShowNav]=useState(false)
    const [showLogin,setShowLogin]=useState(false)
    const [navOtp,setNavOtp]=useState(false)
    const [userEmail,setUserEmail]=useState()
    const [sideBar,setSideBar]=useState(false)
    const [menuItems,setMenuItems]=useState(false)
    const [menuSubItems,setMenuSubItems]=useState(false)
    const [menuSlider,setMenuSlider]=useState(false)
    const [goldenElixir,setGoldenElixir]=useState('culinary')







    const [slider1,setSlider1]=useState(false)
    const [slider2,setSlider2]=useState(false)
    const [slider3,setSlider3]=useState(false)
    const [Culinary,setCulinary]=useState(true)
    const [medical,setmedical]=useState(true)
    const [pregnancy,setPregnancy]=useState(true)
    const [cosmetic,setCosmetic]=useState(true)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        recommendations: '',
        cuisine: '',
        saffronDishes: '',
        saffronDishesOther: '',
        flavorPreference: '',
        healthBenefits: '',
        healthBenefitsOther: '',
        healthConditions: '',
        healthConditionsOther: '',
        learning: '',
        currentMedications: '',
        primaryBenefits: '',
        otherPrimaryBenefit: '',
        consultation: '',
        concerns: '',
        skinType: '',
        primarySkinConcerns: '',
        otherSkinConcern: '',
        skincareFrequency: '',
        usedSaffronProducts: '',
        satisfactionLevel: '',
        pregnancyStage: '',
        previousSaffronUse: '',
        saffronUsageDuringPregnancy: '',
        allergies: ''
      });

      

  

    return(
        <UserContext.Provider value={{ goldenElixir,setGoldenElixir,menuSlider,setMenuSlider,menuItems,setMenuItems,menuSubItems,setMenuSubItems,sideBar,setSideBar,userEmail,setUserEmail,navOtp,setNavOtp,showLogin,setShowLogin,showNav,setShowNav,slider1,setSlider1,slider2,setSlider2,slider3,setSlider3,Culinary,setCulinary,medical,setmedical,pregnancy,setPregnancy,cosmetic,setCosmetic,formData, setFormData }} >
            {children}
        </UserContext.Provider>
    )
}