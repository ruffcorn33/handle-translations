// TRANSLATIONS

// ENGLISH
const translations_en = 
{ 
 
    "Cancel": "Cancel",
    "Submit": "Submit",
}

// SPANISH
const translations_sp = 
{

    "Cancel": "Cancelar",
    "Submit": "Presentar",
}

// FRENCH
const translations_fr = 
{
    
    "Cancel": "Annuler",
    "Submit": "Soumettre",
}

// etc

export default function getTranslation(language) {

    let translation;
    if (language==="English") {
        translation = translations_en;
    }
    else if (language === "Español") {
        translation = translations_sp;
    }
    else if (language === "Français") {
        translation = translations_fr;
    }  
    else if (language === "default") {
        translation=translations_en;
    }

    return translation;
}