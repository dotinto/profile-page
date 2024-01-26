const compStyleEl = document.querySelector("link#comp_style")
if (window.innerWidth < 768) { // resolution handler
    compStyleEl.setAttribute("href", "assets/compatible-css/mobile.css")
} else if (window.innerWidth > 1024) {
    compStyleEl.setAttribute("href", "assets/compatible-css/desktop.css")
}

function hexToRgb(hex) { // cin: #000000. cout: {r: 0, g: 0, b: 0}
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function convertHexToSixDigit(hexx) {
    let a = hexx.split("")
    a.shift()
    a = a.join("")
    const hexRegex = /^[0-9a-fA-F]{3}$/;
    if (a.length === 6) {
        return hexx
    } else if (!hexRegex.test(a)) {
        console.error("Enter 3-digit HEX color code.");
        return null;
    }

    const sixDigitHex = a.split('').map(char => char.repeat(2)).join('');

    return "#" + sixDigitHex;
}

let cBC = hexToRgb(convertHexToSixDigit(config.card.cardBackgroundColor))

const setStyle = (selector, styles) => {
    document.querySelector(selector).setAttribute("style", styles);
};

setStyle(".profile-card", `
    --cardBackgroundColor: rgba(${cBC.r}, ${cBC.g}, ${cBC.b}, ${config.card.cardBackgroundAlphaChannel});
    --cardBorderRadius: ${config.card.cardBorderRadius}px;
    --cardBorderColor: ${config.card.cardBorderColor};
    --cardShadowColor: ${config.card.cardShadowColor};
    --cardShadowBlurRadius: ${config.card.cardShadowBlurRadius}px;
    --cardShadowSpreadRadius: ${config.card.cardShadowSpreadRadius}px;
`);

setStyle(".background-image", `
    --backgroundAlphaChannel: ${config.background.backgroundAlphaChannel};
    --backgroundURL: url(${config.background.backgroundURL});
`);

setStyle(".profile-avatar", `
    --avatarBorderColor: ${config.avatar.avatarBorderColor};
    --avatarBorderRadius: ${config.avatar.avatarBorderRadius}%;
    --avatarURL: url("${config.avatar.avatarURL}");
`);

setStyle("body", `
    background-color: ${config.background.backgroundTransparentBlack ? "black" : "white"}
`)

document.querySelectorAll("span, a").forEach(s => {
    s.setAttribute("style", `font-size: ${config.card.cardFontSize}px;font-weight: ${config.card.cardFontWeight};color: ${config.card.cardTextColor}`);
})

setStyle("span.profile-name", `
    font-size: calc(${config.card.cardFontSize}px + 8px);font-weight: ${config.card.cardFontWeight};color: ${config.card.cardTextColor}
`)
setStyle("span.profile-occupation", `
    font-size: calc(${config.card.cardFontSize}px);font-weight: ${config.card.cardFontWeight};color: ${config.card.cardTextColor}
`)
setStyle("span.profile-aboutme", `
    font-size: clamp(${config.card.cardFontSize - 10}px, ${config.card.cardFontSize}px, ${config.card.cardFontSize + 10}px);
    font-weight: ${config.card.cardFontWeight - 100};
    color: ${config.card.cardTextColor}
`)
setStyle("span.profile-age", `
    font-size: ${config.card.cardFontSize + 3}px;
    font-weight: ${config.card.cardFontWeight};
    color: ${config.card.cardTextColor}
`)

document.querySelector(".profile-name").innerHTML = config.name || config.nickname;
document.querySelector(".profile-nickname").innerHTML = config.nickname === "" ? "" : "@" + config.nickname;
document.querySelector(".profile-aboutme").innerHTML = config.aboutMe === "" ? "" : config.aboutMe;
document.querySelector(".profile-age").innerHTML = config.age === "" ? "" : config.age + " years old";
document.querySelector(".profile-occupation").innerHTML = config.occupation;
document.querySelector(".profile-location span").innerHTML = config.address;
document.querySelector(".profile-phone span").innerHTML = config.phoneNumber;
document.querySelector(".profile-website a span").innerHTML = config.website;
document.querySelector(".profile-website a").setAttribute("href", config.website);

document.querySelector(".profile-email span").innerHTML = config.email;

const socials = ["github", "discord", "linkedin", "instagram", "facebook", "twitter"]

socials.forEach(s => {
    if (config.socials[s] !== "") {
        document.querySelector(`div.socials .${s}-link`).setAttribute("href", config.socials[s])
        document.querySelector(`div.socials .${s}-link`).classList.remove("_hidden")
    }
})

