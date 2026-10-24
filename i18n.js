// =============================================================
// GRO-HIT — Multi-Language i18n System v3
// All 22 Scheduled Indian Languages + English (23 total)
// Self-initializing — works on all pages automatically
// =============================================================

const GroHitI18n = {
  current: (() => {
    try { return localStorage.getItem("grohit_lang") || "hi"; }
    catch { return "hi"; }
  })(),

  languages: [
    { code: "en",  name: "English",    native: "English",       flag: "🇬🇧" },
    { code: "hi",  name: "Hindi",      native: "हिन्दी",          flag: "🇮🇳" },
    { code: "bn",  name: "Bengali",    native: "বাংলা",           flag: "🇮🇳" },
    { code: "ta",  name: "Tamil",      native: "தமிழ்",           flag: "🇮🇳" },
    { code: "te",  name: "Telugu",     native: "తెలుగు",          flag: "🇮🇳" },
    { code: "mr",  name: "Marathi",    native: "मराठी",           flag: "🇮🇳" },
    { code: "gu",  name: "Gujarati",   native: "ગુજરાતી",         flag: "🇮🇳" },
    { code: "kn",  name: "Kannada",    native: "ಕನ್ನಡ",           flag: "🇮🇳" },
    { code: "ml",  name: "Malayalam",  native: "മലയാളം",          flag: "🇮🇳" },
    { code: "pa",  name: "Punjabi",    native: "ਪੰਜਾਬੀ",          flag: "🇮🇳" },
    { code: "or",  name: "Odia",       native: "ଓଡ଼ିଆ",           flag: "🇮🇳" },
    { code: "as",  name: "Assamese",   native: "অসমীয়া",         flag: "🇮🇳" },
    { code: "ur",  name: "Urdu",       native: "اردو",            flag: "🇮🇳" },
    { code: "sa",  name: "Sanskrit",   native: "संस्कृतम्",       flag: "🇮🇳" },
    { code: "mai", name: "Maithili",   native: "मैथिली",          flag: "🇮🇳" },
    { code: "ks",  name: "Kashmiri",   native: "کٲشُر",           flag: "🇮🇳" },
    { code: "ne",  name: "Nepali",     native: "नेपाली",          flag: "🇮🇳" },
    { code: "sd",  name: "Sindhi",     native: "سنڌي",            flag: "🇮🇳" },
    { code: "kok", name: "Konkani",    native: "कोंकणी",          flag: "🇮🇳" },
    { code: "doi", name: "Dogri",      native: "डोगरी",           flag: "🇮🇳" },
    { code: "mni", name: "Manipuri",   native: "মৈতৈলোন্",        flag: "🇮🇳" },
    { code: "sat", name: "Santali",    native: "ᱥᱟᱱᱛᱟᱲᱤ",       flag: "🇮🇳" },
    { code: "bo",  name: "Bodo",       native: "बड़ो",             flag: "🇮🇳" },
  ],

  translations: {
    "nav.home":     { en:"Home", hi:"मुख्य", bn:"হোম", ta:"முகப்பு", te:"హోమ్", mr:"मुख्य", gu:"ઘર", kn:"ಮನೆ", ml:"ഹോം", pa:"ਮੁੱਖ", or:"ଘର", as:"হোম", ur:"ہوم", sa:"मुख्यम्", mai:"मुख्य", ks:"ہوم", ne:"मुख्य", sd:"گھر", kok:"मुख्य", doi:"मुख्य", mni:"হোম", sat:"ᱦᱳᱢ", bo:"मुख्य" },
    "nav.report":   { en:"Report", hi:"शिकायत", bn:"রিপোর্ট", ta:"புகார்", te:"నివేదిక", mr:"तक्रार", gu:"ફरियाद", kn:"ವರದಿ", ml:"റിപ്പോർട്", pa:"ਸ਼ਿਕਾਇਤ", or:"ଅଭିଯୋଗ", as:"অভিযোগ", ur:"شکایت", sa:"प्रतिवेदनम्", mai:"शिकायत", ks:"شکایت", ne:"गुनासो", sd:"شڪايت", kok:"तक्रार", doi:"शिकायत", mni:"অভিযোগ", sat:"ᱨᱤᱯᱚᱨᱴ", bo:"शिकायत" },
    "nav.updates":  { en:"Updates", hi:"सूचनाएं", bn:"আপডেট", ta:"அறிவிப்பு", te:"నవీకరణలు", mr:"सूचना", gu:"સૂchna", kn:"ಅಪ್ಡೇಟ್", ml:"അറിയിപ്പ്", pa:"ਸੂਚਨਾ", or:"ଘୋଷଣା", as:"আপডেট", ur:"اپڈیٹ", sa:"सूचनाः", mai:"सूचना", ks:"اطلاع", ne:"अद्यावधिक", sd:"اپڊيٽ", kok:"सूचना", doi:"सूचना", mni:"আপডেট", sat:"ᱩᱯᱰᱮᱴ", bo:"सूचना" },
    "nav.gramconnect": { en:"GramConnect", hi:"ग्राम कनेक्ट", bn:"গ্রাম কানেক্ট", ta:"கிராம் கனெக்ட்", te:"గ్రామ్ కనెక్ట్", mr:"ग्राम कनेक्ट", gu:"ગ્રામ કનેક્ટ", kn:"ಗ್ರಾಮ್ ಕನೆಕ್ಟ್", ml:"ഗ്രാം കണക്ട്", pa:"ਗ੍ਰਾਮ ਕਨੈਕਟ", or:"ଗ୍ରାମ କନେକ୍ଟ", as:"গ্ৰাম কানেক্ট", ur:"گرام کنیکٹ", sa:"ग्राम संयोजः", mai:"ग्राम कनेक्ट", ks:"گرام کنیکٹ", ne:"ग्राम कनेक्ट", sd:"گرام ڪنيڪٽ", kok:"ग्राम कनेक्ट", doi:"ग्राम कनेक्ट", mni:"গ্রাম কানেক্ট", sat:"ᱜᱨᱟᱢ ᱠᱟᱱᱮᱠᱴ", bo:"ग्राम कनेक्ट" },
    "nav.setu":        { en:"Pardesh Setu", hi:"परदेस सेतु", bn:"পরদেশ সেতু", ta:"பரதேஷ் சேது", te:"పరదేశ్ సేతు", mr:"परदेस सेतू", gu:"પરદેશ સેતુ", kn:"ಪರದೇಶ್ ಸೇತು", ml:"പരദേശ് സേതു", pa:"ਪਰਦੇਸ ਸੇਤੂ", or:"ପରଦେଶ ସେତୁ", as:"পৰদেশ সেতু", ur:"پردیس سیتو", sa:"परदेश सेतुः", mai:"परदेस सेतु", ks:"پردیس سیتو", ne:"परदेस सेतु", sd:"پرديس سيتو", kok:"परदेस सेतू", doi:"परदेस सेतु", mni:"পরদেশ সেতু", sat:"ᱯᱟᱨᱫᱮᱥ ᱥᱮᱛᱩ", bo:"परदेस सेतु" },
    "nav.crop":     { en:"Crop", hi:"फसल", bn:"ফসল", ta:"பயிர்", te:"పంట", mr:"पीक", gu:"પাક", kn:"ಬೆಳೆ", ml:"വിള", pa:"ਫਸਲ", or:"ଫସଲ", as:"শস্য", ur:"فصل", sa:"शस्यम्", mai:"फसल", ks:"فصل", ne:"बाली", sd:"فصل", kok:"पीक", doi:"फसल", mni:"শস্য", sat:"ᱜᱟᱰᱟ", bo:"फसल" },
    "nav.mandi":    { en:"Mandi", hi:"मंडी भाव", bn:"বাজার দর", ta:"சந்தை விலை", te:"మార్కెట్", mr:"मंडी", gu:"બજার", kn:"ಮಾರ್ಕೆಟ್", ml:"ചന്ത", pa:"ਮੰਡੀ", or:"ମଣ୍ଡି", as:"বজাৰ", ur:"منڈی", sa:"विपणिः", mai:"मण्डी", ks:"مارکیٹ", ne:"मण्डी", sd:"منڊي", kok:"बाजार", doi:"मंडी", mni:"বাজার", sat:"ᱢᱟᱸᱰᱤ", bo:"मंडी" },
    "nav.schemes":  { en:"Schemes", hi:"योजनाएं", bn:"প্রকল্প", ta:"திட்டங்கள்", te:"పథకాలు", mr:"योजना", gu:"યોજنا", kn:"ಯೋಜನೆಗಳು", ml:"പദ്ധതി", pa:"ਯੋਜਨਾ", or:"ଯୋଜନା", as:"আঁচনি", ur:"اسکیمیں", sa:"योजनाः", mai:"योजना", ks:"اسکیم", ne:"योजना", sd:"اسڪيم", kok:"योजना", doi:"योजना", mni:"আঁচনি", sat:"ᱡᱚᱡᱚ", bo:"योजना" },
    "nav.jobs":     { en:"Jobs", hi:"रोजगार", bn:"চাকরি", ta:"வேலை", te:"ఉద్యోగాలు", mr:"नोकरी", gu:"નोकरी", kn:"ಉದ್ಯೋಗ", ml:"ജോലി", pa:"ਨੌਕਰੀ", or:"ଚାକིରি", as:"চাকৰি", ur:"روزگار", sa:"कार्यम्", mai:"नौकरी", ks:"روزگار", ne:"रोजगार", sd:"نوڪري", kok:"नोकरी", doi:"नौकरी", mni:"চাকরি", sat:"ᱠᱟᱹᱢᱤ", bo:"नोकरी" },
    "nav.radio":    { en:"Radio", hi:"रेडियो", bn:"রেডিও", ta:"வானொலி", te:"రేడియో", mr:"रेडिओ", gu:"રेडिओ", kn:"ರೇಡಿಯೋ", ml:"റേഡിയോ", pa:"ਰੇਡੀਓ", or:"ରେଡ଼ିଓ", as:"ৰেডিঅ'", ur:"ریڈیو", sa:"आकाशवाणी", mai:"रेडियो", ks:"ریڈیو", ne:"रेडियो", sd:"ريڊيو", kok:"रेडिओ", doi:"रेडियो", mni:"ৰেডিঅ'", sat:"ᱨᱮᱰᱤᱚ", bo:"रेडियो" },
    "nav.donate":   { en:"Donate", hi:"मदद", bn:"দান", ta:"நன்கொடை", te:"దానం", mr:"मदत", gu:"મदद", kn:"ದೇಣಿಗೆ", ml:"സഹായം", pa:"ਮਦਦ", or:"ସাহাయ୍ୟ", as:"দান", ur:"عطیہ", sa:"दानम्", mai:"दान", ks:"عطیہ", ne:"दान", sd:"عطيو", kok:"देणगी", doi:"दान", mni:"দান", sat:"ᱫᱟᱱ", bo:"मदद" },
    "nav.suggestion": { en:"Suggestions", hi:"सुझाव", bn:"পরামর্শ", ta:"பரிந்துரைகள்", te:"సూచనలు", mr:"सूचना", gu:"સૂચનો", kn:"ಸಲಹೆಗಳು", ml:"നിർദ്ദേശങ്ങൾ", pa:"ਸੁਝਾਅ", or:"ପରାମର୍ଶ", as:"পৰামৰ্শ", ur:"تجاویز", sa:"परामर्शाः", mai:"सुझाव", ks:"تجاویز", ne:"सुझाव", sd:"تجويزون", kok:"सुझाव", doi:"सुझाव", mni:"পৰামৰ্শ", sat:"ᱥᱩᱡᱷᱟᱣ", bo:"सुझाव" },
    "nav.admin":    { en:"Admin", hi:"प्रशासन", bn:"প্রশাসন", ta:"நிர்வாகம்", te:"అడ్మిన్", mr:"प्रशासन", gu:"વहीवट", kn:"ಆಡಳಿತ", ml:"ഭരണം", pa:"ਪ੍ਰਸ਼ਾਸਨ", or:"ପ୍ରଶାସନ", as:"প্ৰশাসন", ur:"انتظامیہ", sa:"प्रशासनम्", mai:"प्रशासन", ks:"انتظامیہ", ne:"प्रशासन", sd:"انتظاميا", kok:"प्रशासन", doi:"प्रशासन", mni:"প্রশাসন", sat:"ᱟᱰᱢᱤᱱ", bo:"प्रशासन" },
    "nav.sos":      { en:"SOS", hi:"आपातकाल", bn:"জরুরি", ta:"அவசரம்", te:"అత్యవసరం", mr:"आणीबाणी", gu:"કटोकटी", kn:"ತುರ್ತು", ml:"അടിയന്തരം", pa:"ਐਮਰਜੈਂਸੀ", or:"ଜरुरी", as:"জৰুৰী", ur:"ایمرجنسی", sa:"आपत्कालः", mai:"आपातकाल", ks:"ایمرجنسی", ne:"आपतकाल", sd:"ايمرجنسي", kok:"आणीबाणी", doi:"आपातकाल", mni:"জরুরি", sat:"ᱮᱢᱚᱨᱡᱮᱱᱥᱤ", bo:"आपातकाल" },

    "header.tagline": { en:"Village Support & Panchayat Portal", hi:"ग्राम सेवा पोर्टल (गाँव का डिजिटल दरबार)", bn:"গ্রাম সেবা পোর্টাল", ta:"கிராம சேவை போர்டல்", te:"గ్రామ సేవా పోర్టల్", mr:"ग्राम सेवा पोर्टल", gu:"ગ્રામ સेवा पोर्टल", kn:"ಗ್ರಾಮ ಸೇವಾ ಪೋರ್ಟಲ್", ml:"ഗ്രാമ സേവ പോർട്ടൽ", pa:"ਪਿੰਡ ਸੇਵਾ ਪੋਰਟਲ", or:"ଗ୍ରାମ ସेवा पोर्टाल", as:"গ্ৰাম সেৱা পোৰ্টেল", ur:"گاؤں خدمت پورٹل", sa:"ग्राम सेवा पोर्टलम्", mai:"ग्राम सेवा पोर्टल", ks:"گاؤن خدمت", ne:"गाउँ सेवा पोर्टल", sd:"ڳوٺ خدمت پورٽل", kok:"ग्राम सेवा पोर्टल", doi:"ग्राम सेवा पोर्टल", mni:"গ্ৰাম সেৱা পোৰ্টাল", sat:"ᱜᱟᱺᱣ ᱥᱟᱦᱟ", bo:"ग्राम सेवा पोर्टल" },
    "header.switchrole": { en:"Switch Role", hi:"भूमिका बदलें", bn:"ভূমিকা পরিবর্তন", ta:"பாத்திரம் மாற்று", te:"పాత్ర మార్చు", mr:"भूमिका बदला", gu:"ભૂमिका बदलो", kn:"ಪಾತ್ರ ಬದಲಿಸು", ml:"റോൾ മাറ്റൂ", pa:"ਭੂਮਿਕਾ ਬਦਲੋ", or:"ভূমিকা বদলাও", as:"ভূমিকা সলনি", ur:"کردار بدلیں", sa:"भूमिका परिवर्तनम्", mai:"भूमिका बदलू", ks:"کردار بدلیں", ne:"भूमिका बदल्नुस्", sd:"ڪردار بدلايو", kok:"भूमिका बदल", doi:"भूमिका बदलो", mni:"ভূমিকা বদলাও", sat:"ᱨᱚᱞ ᱵᱚᱫᱚᱞ", bo:"भूमिका बदलो" },
    "header.sos":   { en:"🚨 SOS Emergency", hi:"🚨 आपातकाल", bn:"🚨 জরুরি", ta:"🚨 அவசரம்", te:"🚨 అత్యవసరం", mr:"🚨 आणीबाणी", gu:"🚨 કटोकटी", kn:"🚨 ತುರ್ತು", ml:"🚨 അടിയന്തരം", pa:"🚨 ਐਮਰਜੈਂਸੀ", or:"🚨  జरుरी", as:"🚨 জৰুৰী", ur:"🚨 ایمرجنسی", sa:"🚨 आपत्कालः", mai:"🚨 आपातकाल", ks:"🚨 ایمرجنسی", ne:"🚨 आपतकाल", sd:"🚨 ايمرجنسي", kok:"🚨 आणीबाणी", doi:"🚨 आपातकाल", mni:"🚨 জরুরি", sat:"🚨 ᱮᱢᱚᱨᱡᱮᱱᱥᱤ", bo:"🚨 आपातकाल" },

    "home.welcome":  { en:"Welcome to GroHit • Empowered Village, Prosperous India", hi:"GroHit में आपका स्वागत है • सशक्त गांव, समृद्ध भारत", bn:"GroHit-এ স্বাগতম • ক্ষমতায়িত গ্রাম, সমৃদ্ধ ভারত", ta:"GroHit-க்கு வரவேற்கிறோம் • வலிமையான கிராமம்", te:"GroHit కు స్వాగతం • శక్తివంతమైన గ్రామం", mr:"GroHit मध्ये स्वागत • सक्षम गाव, समृद्ध भारत", gu:"GroHit माँ स्वागत • सक्षम गाम, समृद्ध भारत", kn:"GroHit ಗೆ ಸ್ವಾಗತ • ಸಶಕ್ತ ಗ್ರಾಮ", ml:"GroHit-ലേക്ക് സ്വാഗതം • ശക്തമായ ഗ്രാമം", pa:"GroHit ਵਿੱਚ ਸੁਆਗਤ • ਸ਼ਕਤੀਸ਼ਾਲੀ ਪਿੰਡ", or:"GroHit ରେ ସ୍ୱାଗତ • ସଶକ୍ତ ଗ୍ରାମ", as:"GroHit ত স্বাগতম • শক্তিশালী গাঁও", ur:"GroHit میں خوش آمدید • بااختیار گاؤں", sa:"GroHit स्वागतम् • सशक्त ग्रामम्", mai:"GroHit में स्वागत • सशक्त गाम", ks:"GroHit میں خوش آمدید", ne:"GroHit मा स्वागत • सशक्त गाउँ", sd:"GroHit ۾ ڀلي آيا • با اختيار ڳوٺ", kok:"GroHit त स्वागत • सक्षम गाव", doi:"GroHit च स्वागत • सशक्त पिंड", mni:"GroHit-ত স্বাগতম • শক্তিশালী গাঁও", sat:"GroHit ᱨᱮ ᱵᱟᱦᱟ • ᱥᱚᱢᱨᱤᱫᱫᱷ ᱠᱷᱚᱱᱚ", bo:"GroHit में स्वागत • सशक्त गाम" },
    "home.subtitle": { en:"Your all-in-one digital portal for village services — report issues, view health announcements, check Mandi prices, scan crop diseases, and discover government schemes.", hi:"गांव सेवाओं का डिजिटल पोर्टल — शिकायत दर्ज करें, स्वास्थ्य सूचनाएं देखें, मंडी भाव जांचें, फसल रोग पहचानें और सरकारी योजनाएं खोजें।", bn:"গ্রাম সেবার ডিজিটাল পোর্টাল — অভিযোগ দাখিল করুন, স্বাস্থ্য ঘোষণা দেখুন, বাজার মূল্য পরীক্ষা করুন।", ta:"கிராம சேவைகளுக்கான டிஜிட்டல் போர்டல் — புகார்கள் பதிவு செய்யுங்கள்.", te:"గ్రామ సేవల డిజిటల్ పోర్టల్ — సమస్యలు నివేదించండి, మార్కెట్ ధరలు చూడండి.", mr:"गाव सेवांसाठी डिजिटल पोर्टल — तक्रारी नोंदवा, मंडी भाव तपासा.", gu:"ग्राम सेवा डिजिटल पोर्टल — फरियाद नोंधो, मंडी भाव चेक करो.", kn:"ಗ್ರಾಮ ಸೇವೆಗಳ ಡಿಜಿಟಲ್ ಪೋರ್ಟಲ್ — ದೂರುಗಳನ್ನು ಸಲ್ಲಿಸಿ.", ml:"ഗ്രാമ സേവനങ്ങൾക്കുള്ള ഡിജിറ്റൽ പോർട്ടൽ — പരാതികൾ നൽകൂ.", pa:"ਪਿੰਡ ਸੇਵਾਵਾਂ ਲਈ ਡਿਜੀਟਲ ਪੋਰਟਲ — ਸ਼ਿਕਾਇਤਾਂ ਦਰਜ ਕਰੋ.", or:"ଗ୍ରାମ ସেবা ডিজিটাল পোর্টাল — অভিযোগ দাখিল.", as:"গাঁও সেৱাৰ ডিজিটেল পোৰ্টেল — অভিযোগ দাখিল কৰক.", ur:"گاؤں خدمات کا ڈیجیٹل پورٹل — شکایات درج کریں.", sa:"ग्राम सेवाणां पोर्टलम् — समस्याः प्रतिवेदयत.", mai:"गाम सेवाक डिजिटल पोर्टल — शिकायत दर्ज करू.", ne:"गाउँ सेवाको डिजिटल पोर्टल — गुनासो गर्नुहोस्.", sd:"ڳوٺ خدمتن جو پورٽل — شڪايت داخل ڪريو.", kok:"गाव सेवांचो पोर्टल — तक्रारो नोंदवा.", doi:"पिंड सेवाएं दा पोर्टल — शिकायत दर्ज करो.", mni:"গাঁও সেৱাৰ পোৰ্টেল — অভিযোগ দাখিল কৰক.", sat:"ᱜᱟᱺᱣ ᱥᱟᱦᱟ ᱫᱤᱡᱤᱴᱚᱞ ᱯᱚᱨᱴᱚᱞ", bo:"गाम सेवाक डिजिटल पोर्टल" },
    "home.report_btn": { en:"📍 Report Village Problem", hi:"📍 शिकायत करें", bn:"📍 অভিযোগ করুন", ta:"📍 புகார் தெரிவிக்கவும்", te:"📍 ఫిర్యాదు నమోదు", mr:"📍 तक्रार करा", gu:"📍 ફरियाद करो", kn:"📍 ದೂರು ಸಲ್ಲಿಸಿ", ml:"📍 പരാതി നൽകൂ", pa:"📍 ਸ਼ਿਕਾਇਤ ਕਰੋ", or:"📍 ଅভিযোগ দর্জ", as:"📍 অভিযোগ দাখিল", ur:"📍 شکایت کریں", sa:"📍 समस्या प्रतिवेदयत", mai:"📍 शिकायत करू", ks:"📍 شکایت کریں", ne:"📍 गुनासो गर्नुस्", sd:"📍 شڪايت ڪريو", kok:"📍 तक्रार करा", doi:"📍 शिकायत करो", mni:"📍 অভিযোগ দাখিল", sat:"📍 ᱨᱤᱯᱚᱨᱴ", bo:"📍 शिकायत करो" },
    "home.updates_btn": { en:"📣 View Updates", hi:"📣 सूचनाएं देखें", bn:"📣 আপডেট দেখুন", ta:"📣 அறிவிப்புகள் பாருங்கள்", te:"📣 నవీకరణలు చూడండి", mr:"📣 सूचना पाहा", gu:"📣 सूचना जुओ", kn:"📣 ಅಪ್ಡೇಟ್‌ಗಳು", ml:"📣 അറിയിപ്പുകൾ", pa:"📣 ਸੂਚਨਾਵਾਂ ਦੇਖੋ", or:"📣 ঘোষণা দেখনৱ", as:"📣 আপডেট চাওক", ur:"📣 اپڈیٹ دیکھیں", sa:"📣 सूचनाः पश्यत", mai:"📣 सूचना देखू", ks:"📣 اطلاع دیکھیں", ne:"📣 अद्यावधिक हेर्नुस्", sd:"📣 اپڊيٽ ڏسو", kok:"📣 सूचना पळयात", doi:"📣 सूचना देखो", mni:"📣 আপডেট চাওক", sat:"📣 ᱩᱯᱰᱮᱴ", bo:"📣 सूचना देखो" },
    "home.voice_btn": { en:"🎤 Voice Help", hi:"🎤 आवाज़ में सुनें", bn:"🎤 ভয়েস সাহায্য", ta:"🎤 குரல் உதவி", te:"🎤 వాయిస్ సహాయం", mr:"🎤 आवाज मदत", gu:"🎤 अवाज मदद", kn:"🎤 ಧ್ವನಿ ಸಹಾಯ", ml:"🎤 ശബ്ദ സഹായം", pa:"🎤 ਆਵਾਜ਼ ਮਦਦ", or:"🎤 শব্দ সহায়", as:"🎤 মাতৰ সহায়", ur:"🎤 آواز مدد", sa:"🎤 स्वर सहायम्", mai:"🎤 आवाज सहायता", ks:"🎤 آواز مدد", ne:"🎤 आवाज सहायता", sd:"🎤 آواز مدد", kok:"🎤 आवाज मदत", doi:"🎤 आवाज मदद", mni:"🎤 মাতৰ সহায়", sat:"🎤 ᱟᱣᱟᱡ ᱥᱟᱦᱟ", bo:"🎤 आवाज सहायता" },

    "ai.title":      { en:"🤖 Gro-Hit AI Assistant", hi:"🤖 AI सहायक", bn:"🤖 AI সহায়ক", ta:"🤖 AI உதவியாளர்", te:"🤖 AI సహాయకుడు", mr:"🤖 AI सहाय्यक", gu:"🤖 AI सहायक", kn:"🤖 AI ಸಹಾಯಕ", ml:"🤖 AI സഹായി", pa:"🤖 AI ਸਹਾਇਕ", or:"🤖 AI সহাย়ক", as:"🤖 AI সহায়ক", ur:"🤖 AI معاون", sa:"🤖 AI सहायकः", mai:"🤖 AI सहायक", ne:"🤖 AI सहायक", ks:"🤖 AI مددگار", sd:"🤖 AI مددگار", kok:"🤖 AI सहाय्यक", doi:"🤖 AI सहाइक", mni:"🤖 AI সহায়ক", sat:"🤖 AI ᱥᱟᱦᱟᱭ", bo:"🤖 AI सहायक" },
    "ai.placeholder": { en:"Ask anything... e.g. Am I eligible for PM-Kisan?", hi:"कुछ भी पूछें... जैसे: PM-Kisan के लिए पात्र हूं?", bn:"যেকোনো প্রশ্ন করুন...", ta:"எதையும் கேளுங்கள்...", te:"ఏదైనా అడగండి...", mr:"काहीही विचारा...", gu:"कुछ भी पूछो...", kn:"ಏನಾದರೂ ಕೇಳಿ...", ml:"എന്തും ചോദിക്കൂ...", pa:"ਕੁਝ ਵੀ ਪੁੱਛੋ...", or:"যাহা হেউ পাচারন্তু...", as:"যিকোনো প্ৰশ্ন কৰক...", ur:"کچھ بھی پوچھیں...", sa:"किमपि पृच्छत...", mai:"कछु पूछू...", ks:"کچھ بھی پوچھیں...", ne:"केहि पनि सोध्नुस्...", sd:"ڪجهه به پڇو...", kok:"काहीही विचारा...", doi:"कुझ वी पुछो...", mni:"যিকোনো প্ৰশ্ন কৰক...", sat:"ᱡᱟᱦᱟ ᱦᱟᱹᱞᱮᱫ...", bo:"कुझ पूछो..." },
    "ai.send":       { en:"Send", hi:"भेजें", bn:"পাঠান", ta:"அனுப்பு", te:"పంపండి", mr:"पाठवा", gu:"मोकलो", kn:"ಕಳುಹಿಸು", ml:"അయക്കൂ", pa:"ਭੇਜੋ", or:"পথাণ্ডু", as:"পঠাওক", ur:"بھیجیں", sa:"प्रेषयत", mai:"पठाउ", ks:"بھیجیں", ne:"पठाउनुस्", sd:"موڪليو", kok:"पाठवा", doi:"भेजो", mni:"পাঠাও", sat:"ᱯᱟᱛᱷᱟᱣ", bo:"भेजो" },
    "ai.voice":      { en:"🎤 Speak", hi:"🎤 बोलें", bn:"🎤 বলুন", ta:"🎤 பேசு", te:"🎤 మాట్లాడండి", mr:"🎤 बोला", gu:"🎤 बोलो", kn:"🎤 ಮಾತಾಡಿ", ml:"🎤 സംസാരിക്കൂ", pa:"🎤 ਬੋਲੋ", or:"🎤 বলুন", as:"🎤 কওক", ur:"🎤 بولیں", sa:"🎤 वदत", mai:"🎤 बाजू", ks:"🎤 بولیں", ne:"🎤 बोल्नुस्", sd:"🎤 ڳالهايو", kok:"🎤 बोला", doi:"🎤 बोलो", mni:"🎤 হাই", sat:"🎤 ᱢᱟᱹᱛᱤ", bo:"🎤 बोलो" },

    "dbt.title":     { en:"🚦 DBT Traffic Light — Are you getting government money?", hi:"🚦 DBT ट्रैफिक लाइट — क्या आपको सरकारी पैसा मिल रहा है?", bn:"🚦 DBT স্ট্যাটাস — সরকারি অর্থ পাচ্ছেন?", ta:"🚦 DBT நிலை — அரசாங்க பணம் கிடைக்கிறதா?", te:"🚦 DBT స్థితి — ప్రభుత్వ నగదు వస్తోందా?", mr:"🚦 DBT स्थिती — सरकारी पैसे मिळतात का?", gu:"🚦 DBT स्थिति — सरकारी पैसे मळे छे?", kn:"🚦 DBT ಸ್ಥಿತಿ — ಸರ್ಕಾರಿ ಹಣ ಸಿಗುತ್ತಿದೆಯೇ?", ml:"🚦 DBT സ്ഥിതി — സർക്കാർ പണം ലഭിക്കുന്നുണ്ടോ?", pa:"🚦 DBT ਸਥਿਤੀ — ਸਰਕਾਰੀ ਪੈਸੇ ਮਿਲ ਰਹੇ ਹਨ?", or:"🚦 DBT ସ୍ᱛᱷᱤᱛᱤ — सरकारी টঙ্কা মিলুছি?", as:"🚦 DBT স্থিতি — চৰকাৰী ধন পাইছে?", ur:"🚦 DBT اسٹیٹس — سرکاری پیسے مل رہے ہیں?", sa:"🚦 DBT स्थितिः — सरकारीधनम् प्राप्यते?", mai:"🚦 DBT स्थिति — सरकारी पैसा भेटि रहल?", ks:"🚦 DBT حالت", ne:"🚦 DBT स्थिति — सरकारी पैसा पाइरहनुभएको छ?", sd:"🚦 DBT حيثيت — سرڪاري پيسا ملي رهيا آهن؟", kok:"🚦 DBT स्थिती — सरकारी पैसे मिळतात?", doi:"🚦 DBT स्थिति — सरकारी पैसे मिल रहे हन?", mni:"🚦 DBT স্থিতি", sat:"🚦 DBT ᱥᱛᱷᱤᱛᱤ", bo:"🚦 DBT स्थिति" },
    "dbt.check_btn": { en:"🔍 Check My DBT Status", hi:"🔍 मेरी DBT स्थिति जांचें", bn:"🔍 আমার DBT স্ট্যাটাস দেখুন", ta:"🔍 என் DBT நிலை சரிபார்க்கவும்", te:"🔍 నా DBT స్థితి తనిఖీ", mr:"🔍 माझी DBT स्थिती तपासा", gu:"🔍 मारो DBT स्थिति", kn:"🔍 ನನ್ನ DBT ಸ್ಥಿತಿ", ml:"🔍 എന്റെ DBT സ്ഥിതി", pa:"🔍 ਮੇਰੀ DBT ਸਥਿਤੀ", or:"🔍 মো DBT ଅভিযোগ", as:"🔍 মোৰ DBT স্থিতি", ur:"🔍 میری DBT حیثیت", sa:"🔍 मम DBT स्थितिः", mai:"🔍 हमर DBT स्थिति", ks:"🔍 میری DBT حالت", ne:"🔍 मेरो DBT स्थिति", sd:"🔍 منهنجو DBT حيثيت", kok:"🔍 माझी DBT स्थिती", doi:"🔍 मेरी DBT स्थिति", mni:"🔍 ꯑꯩꯒꯤ DBT", sat:"🔍 ᱟᱢ DBT ᱥᱛᱷᱤᱛᱤ", bo:"🔍 मेरी DBT स्थिति" },

    "btn.submit":    { en:"Submit", hi:"जमा करें", bn:"জমা দিন", ta:"சமர்ப்பி", te:"సమర్పించు", mr:"सादर करा", gu:"जमा करो", kn:"ಸಲ್ಲಿಸು", ml:"സমർപ്പിക്കൂ", pa:"ਜਮ੍ਹਾਂ ਕਰੋ", or:"দাখল", as:"দাখিল কৰক", ur:"جمع کریں", sa:"प्रेषयत", mai:"जमा करू", ks:"جمع کریں", ne:"पेश गर्नुस्", sd:"جمع ڪريو", kok:"सादर करा", doi:"जमा करो", mni:"দাখিল কৰক", sat:"ᱡᱚᱢᱟ", bo:"जमा करो" },
    "btn.cancel":    { en:"Cancel", hi:"रद्द करें", bn:"বাতিল", ta:"ரத்து", te:"రద్దు", mr:"रद्द", gu:"रद्द", kn:"ರದ್ದು", ml:"റദ്ദ്", pa:"ਰੱਦ", or:"বাতিল", as:"বাতিল", ur:"منسوخ", sa:"निरस्यत", mai:"रद्द करू", ks:"منسوخ", ne:"रद्द गर्नुस्", sd:"رد ڪريو", kok:"रद्द", doi:"रद्द करो", mni:"বাতিল", sat:"ᱵᱟᱛᱤᱞ", bo:"रद्द" },
    "btn.loading":   { en:"Loading...", hi:"लोड हो रहा है...", bn:"লোড হচ্ছে...", ta:"ஏற்றுகிறது...", te:"లోడ్ అవుతోంది...", mr:"लोड होत आहे...", gu:"लोड थई रहुं छे...", kn:"ಲೋಡ್ ಆಗುತ್ತಿದೆ...", ml:"ലോഡ് ആകുന്നു...", pa:"ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...", or:"লোড হেউছি...", as:"লোড হৈছে...", ur:"لوڈ ہو رہا ہے...", sa:"लोड भवति...", mai:"लोड हो रहल...", ks:"لوڈ ہو رہا ہے...", ne:"लोड भइरहेको छ...", sd:"لوڊ ٿي رهيو آهي...", kok:"लोड होत आहे...", doi:"लोड हो रहा है...", mni:"লোড হৈছে...", sat:"ᱞᱚᱰ...", bo:"लोड हो रहल..." },
    "btn.see_all":   { en:"View All →", hi:"सब देखें →", bn:"সব দেখুন →", ta:"அனைத்தும் →", te:"అన్నీ చూడు →", mr:"सर्व पाहा →", gu:"सब जुओ →", kn:"ಎಲ್ಲ ನೋಡಿ →", ml:"എല്ലാം →", pa:"ਸਭ ਦੇਖੋ →", or:"সবু দেখ →", as:"সকলো চাওক →", ur:"سب دیکھیں →", sa:"सर्वम् पश्यत →", mai:"सब देखू →", ks:"سب دیکھیں →", ne:"सबै हेर्नुस् →", sd:"سڀ ڏسو →", kok:"सर्व पाहा →", doi:"सब देखो →", mni:"সকলো চাওক →", sat:"ᱡᱟᱦᱟ ᱫᱚᱦᱚ →", bo:"सब देखो →" },

    "status.pending":   { en:"Pending", hi:"लंबित", bn:"মুলতুবি", ta:"நிலுவை", te:"పెండింగ్", mr:"प्रलंबित", gu:"बाकी", kn:"ಬಾಕಿ", ml:"തീർക്കുക", pa:"ਬਕਾਇਆ", or:"অপেক্ষিত", as:"বিচাৰাধীন", ur:"زیر التوا", sa:"प्रतीक्षमाणम्", mai:"लम्बित", ks:"زیر التوا", ne:"बाँकी", sd:"زير التوا", kok:"प्रलंबित", doi:"लंबित", mni:"অপেক্ষিত", sat:"ᱯᱮᱱᱰᱤᱝ", bo:"लम्बित" },
    "status.resolved":  { en:"Resolved", hi:"हल हुआ", bn:"সমাধান", ta:"தீர்க்கப்பட்டது", te:"పరిష్కరించబడింది", mr:"सुटले", gu:"हल थयुं", kn:"ಪರಿಹರಿಸಲಾಗಿದೆ", ml:"പരിഹരിചछ", pa:"ਹੱਲ ਹੋਇਆ", or:"সমাধান", as:"সমাধান", ur:"حل شدہ", sa:"परिहृतम्", mai:"हल भेल", ks:"حل شدہ", ne:"समाधान भयो", sd:"حل ڪيل", kok:"सुटले", doi:"हल होइया", mni:"সমাধান", sat:"ᱨᱮᱥᱚᱞᱵᱷᱟ", bo:"हल भेल" },
    "status.inprogress":{ en:"In Progress", hi:"प्रक्रिया में", bn:"চলমান", ta:"செயல்படுகிறது", te:"పురోగతిలో ఉంది", mr:"प्रक्रियेत", gu:"चालु छे", kn:"ಪ್ರಗತಿಯಲ್ಲಿ", ml:"നടക്കുന്നു", pa:"ਚੱਲ ਰਿਹਾ ਹੈ", or:"চালু আছি", as:"চলমান", ur:"جاری", sa:"प्रक्रियायाम्", mai:"चलि रहल", ks:"جاری", ne:"भइरहेको छ", sd:"جاري", kok:"प्रक्रियेत", doi:"चल रहा है", mni:"চলিত", sat:"ᱮᱢ ᱯᱨᱚᱜᱨᱮᱥ", bo:"चल रहल" },

    "lang.label":    { en:"Language", hi:"भाषा", bn:"ভাষা", ta:"மொழி", te:"భాష", mr:"भाषा", gu:"भाषा", kn:"ಭಾಷೆ", ml:"ഭാഷ", pa:"ਭਾਸ਼ਾ", or:"ভাষা", as:"ভাষা", ur:"زبان", sa:"भाषा", mai:"भाषा", ks:"زبان", ne:"भाषा", sd:"ٻولي", kok:"भाशा", doi:"बोली", mni:"ভাষা", sat:"ᱵᱷᱟᱥᱟ", bo:"भाषा" }
  },

  t(key, lang) {
    const l = lang || this.current;
    const entry = this.translations[key];
    if (!entry) return key;
    return entry[l] || entry["hi"] || entry["en"] || key;
  },

  getSpeechLang(code) {
    const map = { hi:"hi-IN", en:"en-IN", bn:"bn-IN", ta:"ta-IN", te:"te-IN", mr:"mr-IN", gu:"gu-IN", kn:"kn-IN", ml:"ml-IN", pa:"pa-IN", or:"or-IN", as:"as-IN", ur:"ur-IN", sa:"sa-IN", mai:"mai-IN", ks:"ks-IN", ne:"ne-IN", sd:"sd-IN", kok:"kok-IN", doi:"doi-IN", mni:"mni-IN", sat:"sat-IN", bo:"bo-IN" };
    return map[code] || "hi-IN";
  },

  applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = this.t(key);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      el.placeholder = this.t(el.getAttribute("data-i18n-placeholder"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      el.title = this.t(el.getAttribute("data-i18n-title"));
    });
    document.documentElement.lang = this.current;
    // RTL support for Urdu, Kashmiri, Sindhi
    const rtlLangs = ["ur", "ks", "sd"];
    document.documentElement.dir = rtlLangs.includes(this.current) ? "rtl" : "ltr";
  },

  setLanguage(code) {
    const valid = this.languages.some(l => l.code === code) ? code : "hi";
    this.current = valid;
    try { localStorage.setItem("grohit_lang", valid); } catch {}
    this.applyTranslations();
    this.refreshSwitcher();
    if (window.GroHitAI) GroHitAI.updateLanguage();
    if (window.GroHit) GroHit.speechLang = this.getSpeechLang(valid);
    window.dispatchEvent(new CustomEvent("grohit-lang-changed", { detail: { lang: valid } }));
  },

  refreshSwitcher() {
    const btn = document.getElementById("langToggleBtn");
    if (!btn) return;
    const lang = this.languages.find(l => l.code === this.current) || this.languages[1];
    btn.innerHTML = `<span>${lang.flag}</span><span class="lang-name">${lang.native}</span><span class="lang-arrow">▾</span>`;
    document.querySelectorAll(".lang-modal-option").forEach(opt => {
      const isActive = opt.dataset.lang === this.current;
      opt.classList.toggle("active", isActive);
      const chk = opt.querySelector(".lang-check");
      if (chk) chk.style.opacity = isActive ? "1" : "0";
    });
  },

  _closeModal() {
    const overlay = document.getElementById("langModalOverlay");
    if (!overlay) return;
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => { overlay.style.display = "none"; }, 280);
    const btn = document.getElementById("langToggleBtn");
    if (btn) btn.setAttribute("aria-expanded", "false");
    // reset search
    const si = document.getElementById("langSearchInput");
    if (si) { si.value = ""; }
    document.querySelectorAll(".lang-modal-option").forEach(b => b.style.display = "");
    document.querySelectorAll(".lang-group-label").forEach(l => l.style.display = "");
  },

  _openModal() {
    const overlay = document.getElementById("langModalOverlay");
    if (!overlay) return;
    overlay.style.display = "flex";
    const btn = document.getElementById("langToggleBtn");
    if (btn) btn.setAttribute("aria-expanded", "true");
    // Force reflow then add open class for animation
    overlay.getBoundingClientRect();
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      const si = document.getElementById("langSearchInput");
      if (si) si.focus();
    }, 100);
  },

  renderSwitcher(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const current = this.languages.find(l => l.code === this.current) || this.languages[1];
    const indianLangs = this.languages.filter(l => l.code !== "en");
    const engLang = this.languages.find(l => l.code === "en");

    container.innerHTML = `
      <div class="lang-switcher" id="langSwitcherWidget">
        <button class="lang-btn" id="langToggleBtn"
                title="${this.t('lang.label')}"
                aria-label="Select Language"
                aria-expanded="false"
                aria-haspopup="dialog">
          <span>${current.flag}</span>
          <span class="lang-name">${current.native}</span>
          <span class="lang-arrow">▾</span>
        </button>
      </div>

      <!-- Language Selection Modal -->
      <div class="lang-modal-overlay" id="langModalOverlay" role="dialog" aria-modal="true" aria-label="Select Language" style="display:none;">
        <div class="lang-modal" id="langModal">

          <div class="lang-modal-header">
            <div class="lang-modal-title">
              <span>🌐</span>
              <span>भाषा चुनें / Choose Language</span>
            </div>
            <button class="lang-modal-close" id="langModalClose" aria-label="Close language selector" type="button">✕</button>
          </div>

          <div class="lang-modal-search">
            <input type="text" id="langSearchInput" placeholder="🔍 Search language..." class="lang-search-input" autocomplete="off" />
          </div>

          <div class="lang-modal-body" id="langModalBody">
            <div class="lang-group-label">International</div>
            <div class="lang-modal-grid">
              <button class="lang-modal-option ${engLang.code === this.current ? 'active' : ''}"
                      type="button" data-lang="${engLang.code}"
                      data-name="${engLang.name.toLowerCase()}" data-native="english"
                      onclick="GroHitI18n.selectLang('${engLang.code}')">
                <span class="lang-opt-flag">${engLang.flag}</span>
                <div class="lang-opt-text">
                  <span class="lang-opt-native">${engLang.native}</span>
                  <span class="lang-opt-name">${engLang.name}</span>
                </div>
                <span class="lang-check" style="opacity:${engLang.code === this.current ? 1 : 0}">✓</span>
              </button>
            </div>

            <div class="lang-group-label">🇮🇳 भारतीय भाषाएं — All 22 Scheduled Indian Languages</div>
            <div class="lang-modal-grid">
              ${indianLangs.map(l => `
                <button class="lang-modal-option ${l.code === this.current ? 'active' : ''}"
                        type="button" data-lang="${l.code}"
                        data-name="${l.name.toLowerCase()}" data-native="${l.native}"
                        onclick="GroHitI18n.selectLang('${l.code}')">
                  <span class="lang-opt-flag">${l.flag}</span>
                  <div class="lang-opt-text">
                    <span class="lang-opt-native">${l.native}</span>
                    <span class="lang-opt-name">${l.name}</span>
                  </div>
                  <span class="lang-check" style="opacity:${l.code === this.current ? 1 : 0}">✓</span>
                </button>
              `).join("")}
            </div>
          </div>

        </div>
      </div>`;

    // Bind open button
    const toggleBtn = document.getElementById("langToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const overlay = document.getElementById("langModalOverlay");
        if (overlay && overlay.classList.contains("open")) {
          this._closeModal();
        } else {
          this._openModal();
        }
      });
    }

    // Bind close button (X)
    const closeBtn = document.getElementById("langModalClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this._closeModal();
      });
    }

    // Click on overlay backdrop to close
    const overlay = document.getElementById("langModalOverlay");
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          this._closeModal();
        }
      });
    }

    // Escape key to close
    if (!document.body.dataset.grohitLangEscBound) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          const ov = document.getElementById("langModalOverlay");
          if (ov && ov.classList.contains("open")) {
            this._closeModal();
          }
        }
      });
      document.body.dataset.grohitLangEscBound = "true";
    }

    // Search/filter
    const searchInput = document.getElementById("langSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const q = searchInput.value.toLowerCase().trim();
        document.querySelectorAll(".lang-modal-option").forEach(btn => {
          const name = (btn.dataset.name || "").toLowerCase();
          const native = (btn.dataset.native || "").toLowerCase();
          btn.style.display = (!q || name.includes(q) || native.includes(q)) ? "" : "none";
        });
        document.querySelectorAll(".lang-group-label").forEach(label => {
          const grid = label.nextElementSibling;
          if (!grid) return;
          const anyVisible = [...grid.querySelectorAll(".lang-modal-option")].some(b => b.style.display !== "none");
          label.style.display = anyVisible ? "" : "none";
        });
      });
    }
  },

  selectLang(code) {
    this.setLanguage(code);
    this._closeModal();
  },

  init() {
    this.applyTranslations();
    const renderWhenReady = () => {
      this.renderSwitcher("langSwitcherContainer");
      this.applyTranslations();
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderWhenReady);
    } else {
      renderWhenReady();
    }
  }
};

GroHitI18n.init();
