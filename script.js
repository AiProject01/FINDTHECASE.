const crimeData = {
    "theft": {
        law: "Section 378 of IPC",
        punishment: "Imprisonment up to 3 years or fine or both.",
        description: "Theft involves taking someone's property without consent."
    },
    "चोरी": {
        law: "आईपीसी की धारा 378",
        punishment: "3 साल तक की जेल या जुर्माना या दोनों।",
        description: "चोरी में बिना सहमति के किसी की संपत्ति लेना शामिल है।"
    },
    "murder": {
        law: "Section 302 of IPC",
        punishment: "Death penalty or life imprisonment.",
        description: "Murder is the unlawful killing of a person with intent."
    },
    "हत्या": {
        law: "आईपीसी की धारा 302",
        punishment: "मृत्युदंड या आजीवन कारावास।",
        description: "हत्या का तात्पर्य जानबूझकर अवैध तरीके से किसी की हत्या करना है।"
    },
    "fraud": {
        law: "Section 420 of IPC",
        punishment: "Imprisonment up to 7 years and fine.",
        description: "Fraud involves deceit for personal gain or causing loss to others."
    },
    "धोखाधड़ी": {
        law: "आईपीसी की धारा 420",
        punishment: "7 साल तक की जेल और जुर्माना।",
        description: "धोखाधड़ी में व्यक्तिगत लाभ या दूसरों को नुकसान पहुंचाने के लिए छल शामिल है।"
    },
    "assault": {
        law: "Section 351 of IPC",
        punishment: "Imprisonment up to 3 months or fine or both.",
        description: "Assault is the act of making a physical attack."
    },
    "हमला": {
        law: "आईपीसी की धारा 351",
        punishment: "3 महीने तक की जेल या जुर्माना या दोनों।",
        description: "हमले का मतलब शारीरिक हमला करना है।"
    },
    "kidnapping": {
        law: "Section 363 of IPC",
        punishment: "Imprisonment up to 7 years and fine.",
        description: "Kidnapping involves taking someone away illegally by force."
    },
    "अपहरण": {
        law: "आईपीसी की धारा 363",
        punishment: "7 साल तक की जेल और जुर्माना।",
        description: "अपहरण में किसी को अवैध रूप से जबरदस्ती ले जाना शामिल है।"
    },
    "domestic violence": {
        law: "Protection of Women from Domestic Violence Act, 2005",
        punishment: "Penalty or imprisonment as per court's decision.",
        description: "Domestic violence refers to abuse within a household."
    },
    "घरेलू हिंसा": {
        law: "घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005",
        punishment: "कोर्ट के निर्णय के अनुसार सजा या जुर्माना।",
        description: "घरेलू हिंसा का मतलब घर के भीतर किया गया अत्याचार है।"
    },
    "rape": {
        law: "Section 375 and 376 of IPC",
        punishment: "Imprisonment of 7 years to life and fine.",
        description: "Rape is non-consensual sexual intercourse with a person."
    },
    "बलात्कार": {
        law: "आईपीसी की धारा 375 और 376",
        punishment: "7 साल से आजीवन कारावास और जुर्माना।",
        description: "बलात्कार का मतलब बिना सहमति के यौन संबंध बनाना है।"
    },
    "cybercrime": {
        law: "IT Act, 2000",
        punishment: "Imprisonment up to 3 years or fine or both.",
        description: "Cybercrime involves criminal activities using computers or the internet."
    },
    "साइबर अपराध": {
        law: "आईटी अधिनियम, 2000",
        punishment: "3 साल तक की जेल या जुर्माना या दोनों।",
        description: "साइबर अपराध में कंप्यूटर या इंटरनेट का उपयोग करके आपराधिक गतिविधियां शामिल हैं।"
    },
    "child labor": {
        law: "Child Labour Prohibition and Regulation Act, 1986",
        punishment: "Imprisonment up to 2 years or fine.",
        description: "Employing children below 14 years in work is prohibited."
    },
    "बाल श्रम": {
        law: "बाल श्रम निषेध और विनियमन अधिनियम, 1986",
        punishment: "2 साल तक की जेल या जुर्माना।",
        description: "14 साल से कम उम्र के बच्चों को काम पर रखना मना है।"
    },
    "drug trafficking": {
        law: "NDPS Act, 1985",
        punishment: "Imprisonment from 10 years to life and fine.",
        description: "Drug trafficking involves illegal trade of narcotic substances."
    },
    "मादक पदार्थ तस्करी": {
        law: "एनडीपीएस अधिनियम, 1985",
        punishment: "10 साल से आजीवन कारावास और जुर्माना।",
        description: "मादक पदार्थों का अवैध व्यापार मादक पदार्थ तस्करी कहलाता है।"
    },
    "acid attack": {
        law: "Section 326A of IPC",
        punishment: "Imprisonment up to 10 years and fine.",
        description: "Acid attack involves throwing acid with the intent to harm."
    },
    "तेजाब हमला": {
        law: "आईपीसी की धारा 326ए",
        punishment: "10 साल तक की जेल और जुर्माना।",
        description: "तेजाब फेंककर नुकसान पहुंचाना तेजाब हमला है।"
    },
    "stalking": {
        law: "Section 354D of IPC",
        punishment: "Imprisonment up to 3 years and fine.",
        description: "Stalking involves repeated unwanted attention towards a person."
    },
    "पीछा करना": {
        law: "आईपीसी की धारा 354डी",
        punishment: "3 साल तक की जेल और जुर्माना।",
        description: "किसी का बार-बार पीछा करना पीछा करना कहलाता है।"
    },
    "harassment": {
        law: "Section 509 of IPC",
        punishment: "Imprisonment up to 1 year and fine.",
        description: "Harassment involves unwelcome behavior causing distress."
    },
    "उत्पीड़न": {
        law: "आईपीसी की धारा 509",
        punishment: "1 साल तक की जेल और जुर्माना।",
        description: "अवांछित व्यवहार करना उत्पीड़न कहलाता है।"
    },
    "forced marriage": {
        law: "Section 366 of IPC",
        punishment: "Imprisonment up to 10 years and fine.",
        description: "Forcing someone to marry against their will is illegal."
    },
    "जबरन विवाह": {
        law: "आईपीसी की धारा 366",
        punishment: "10 साल तक की जेल और जुर्माना।",
        description: "किसी को उनकी इच्छा के विरुद्ध शादी के लिए मजबूर करना अवैध है।"
    },
    "blackmail": {
        law: "Section 503 of IPC",
        punishment: "Imprisonment up to 2 years or fine or both.",
        description: "Blackmail involves threats to reveal information for gain."
    },
    "ब्लैकमेल": {
        law: "आईपीसी की धारा 503",
        punishment: "2 साल तक की जेल या जुर्माना या दोनों।",
        description: "ब्लैकमेल में व्यक्तिगत लाभ के लिए जानकारी का खुलासा करने की धमकी शामिल है।"
    },
    "animal cruelty": {
        law: "Prevention of Cruelty to Animals Act, 1960",
        punishment: "Fine or imprisonment up to 3 months.",
        description: "Animal cruelty involves causing harm or suffering to animals."
    },
    "पशु क्रूरता": {
        law: "पशु क्रूरता रोकथाम अधिनियम, 1960",
        punishment: "जुर्माना या 3 महीने तक की जेल।",
        description: "पशुओं को नुकसान या पीड़ा पहुंचाना पशु क्रूरता कहलाता है।"
    }
};

function searchCrime() {
    const crimeInput = document.getElementById("crime-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results-container");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Check if the crime exists in the database
    if (crimeData[crimeInput]) {
        const law = crimeData[crimeInput].law;
        const punishment = crimeData[crimeInput].punishment;
        const description = crimeData[crimeInput].description;

        // Create result elements
        const resultElement = document.createElement("div");
        resultElement.className = "result";

        const lawElement = document.createElement("div");
        lawElement.innerHTML = `<strong>Law:</strong> ${law}`;

        const punishmentElement = document.createElement("div");
        punishmentElement.innerHTML = `<strong>Punishment:</strong> ${punishment}`;

        const descriptionElement = document.createElement("details");
        descriptionElement.innerHTML = `
            <summary>Description</summary>
            <p>${description}</p>
        `;

        resultElement.appendChild(lawElement);
        resultElement.appendChild(punishmentElement);
        resultElement.appendChild(descriptionElement);

        resultsContainer.appendChild(resultElement);
    } else {
        resultsContainer.innerHTML = `<p>No information found for the entered crime. Please check your input.</p>`;
    }
}
