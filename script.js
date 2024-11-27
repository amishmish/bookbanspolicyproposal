function arwenPersonal() {
    const bye = document.getElementById("arwenB");
    const box = document.getElementById("arwenP");
    box.removeChild(bye);

    const node = document.createTextNode("Arwen talks about how growing up in Texas, a state with many book bans, led to an environment where different identities were not talked about. She was not exposed to queer people and books that had language she could understand were not kept in libraries. Due to this, her ability to learn and grow was limited, and this ignorance led to her silence as a transgender girl in her class was bullied. When she moved to Illinois however, she was able to become a more thoughtful student, connecting different connections and moments between time and continents. She discovered more about herself, and can’t imagine the person she would be without that.");
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "arbye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "arhide()");
    button.setAttribute("id", "arbyebut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function arhide() {
    const bye = document.getElementById("arbye");
    const byebut = document.getElementById("arbyebut");
    const box = document.getElementById("arwenP");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "arwenPersonal()");
    button.setAttribute("id", "arwenB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function amishiPersonal() {
    const bye = document.getElementById("amishiB");
    const box = document.getElementById("amishiP");
    box.removeChild(bye);

    const node = document.createTextNode("Amishi talks about how a book that she has read has since then been banned. She talks about the impact that the book had on her and how banning it will harm students to come, especially LGBTQ students.")
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "ambye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "amhide()");
    button.setAttribute("id", "ambyebut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function amhide() {
    const bye = document.getElementById("ambye");
    const byebut = document.getElementById("ambyebut");
    const box = document.getElementById("amishiP");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "amishiPersonal()");
    button.setAttribute("id", "amishiB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function sukiPersonal() {
    const bye = document.getElementById("sukiB");
    const box = document.getElementById("sukiP");
    box.removeChild(bye);

    const node = document.createTextNode("Suki talks about how in China, several books are banned, a lot with politically sensitive commentary or ones that have nude images. In addition, some on sexuality and gender are also being banned. This has led to people either getting books from Taiwan and Hong Kong or using the internet to illegally access them. To her, book bans have not stopped her education since teachers provide materials, yet she lost the opportunity to discuss different political values until high school. She had to utilize VPNs to explore prohibited topics, which was not easy.");
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "sbye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "shide()");
    button.setAttribute("id", "sbyebut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function shide() {
    const bye = document.getElementById("sbye");
    const byebut = document.getElementById("sbyebut");
    const box = document.getElementById("sukiP");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "sukiPersonal()");
    button.setAttribute("id", "sukiB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function impactIn() {
    const bye = document.getElementById("impactB");
    const box = document.getElementById("impact");
    box.removeChild(bye);

    const node = document.createTextNode("In this discussion, Suki, Arwen, and Amishi talk about the impact that book bans have on education. They discuss how book bans often lead to an incomplete picture of history, with students being ignorant of the experiences of different communities. This leads to poor decisions made based on misinformation and unchecked prejudices and biases, as well as discrimination, exclusion and bullying of students in these ignored groups. Students also will lack empathy that they could have had from reading about the experiences of other students.");
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "impBye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "impactOut()");
    button.setAttribute("id", "impByeBut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function impactOut() {
    const bye = document.getElementById("impBye");
    const byebut = document.getElementById("impByeBut");
    const box = document.getElementById("impact");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "impactIn()");
    button.setAttribute("id", "impactB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function proposed() {
    const bye = document.getElementById("proposeB");
    const box = document.getElementById("propose");
    box.removeChild(bye);

    const node = document.createTextNode("In this video, we propose that North Carolina enact a Freedom to Read act, which has been passed in other states. It protects state and local governments from dictating what books are available to the public. Furthermore, we talk about how the law requires libraries to meet a set of anti-censorship guidelines to receive state funding and that bans books from being removed based on the author’s identity.");
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "propBye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "propout()");
    button.setAttribute("id", "propByeBut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function propout() {
    const bye = document.getElementById("propBye");
    const byebut = document.getElementById("propByeBut");
    const box = document.getElementById("propose");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "proposed()");
    button.setAttribute("id", "proposeB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function conclude() {
    const bye = document.getElementById("concluB");
    const box = document.getElementById("conclusion");
    box.removeChild(bye);

    const node = document.createTextNode("In this video, students talk about the importance of this policy. Amishi talks about how it encourages bringing all voices into schools. Arwen talks about how it brings students to understand topics that are uncomfortable and allows them to experience all the diversity in the world. Suki talks about how it allows students to have access to all information and be empathizing.");
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "concBye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "concluded()");
    button.setAttribute("id", "concByeBut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function concluded() {
    const bye = document.getElementById("concBye");
    const byebut = document.getElementById("concByeBut");
    const box = document.getElementById("conclusion");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "conclude()");
    button.setAttribute("id", "concluB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}

function opp() {
    const bye = document.getElementById("oppB");
    const box = document.getElementById("oppose");
    box.removeChild(bye);

    const node = document.createTextNode("In this video, students talk about the opposition and consequences of the Freedom to Read policy. They talk about how opposition will come from groups like Moms for Liberty, and they believe that by doing this they are protecting their children. However, this sort of shielding will only prevent their children from being able to explore the world and perhaps even set them up for failure in the future where they will see the sorts of people they were shielded from. To educate them however, people can have information sessions, and other such programs to help parents feel comfortable. In addition, we should probe at what they feel is good for kids and what is not. Freedom to Read will also increase pressure on librarians. ");
    const sum = document.createElement("p");
    sum.appendChild(node);
    sum.setAttribute("class", "parabody student");
    sum.setAttribute("id", "oppBye");

    const button = document.createElement("button");
    button.setAttribute("onClick", "oppmaxx()");
    button.setAttribute("id", "oppByeBut");

    const text = document.createTextNode("Hide");
    button.appendChild(text);

    box.appendChild(sum);
    box.appendChild(button);
}

function oppmaxx() {
    const bye = document.getElementById("oppBye");
    const byebut = document.getElementById("oppByeBut");
    const box = document.getElementById("oppose");

    box.removeChild(bye);
    box.removeChild(byebut);

    const button = document.createElement("button");
    button.setAttribute("onClick", "opp()");
    button.setAttribute("id", "oppB");

    const text = document.createTextNode("Summary");
    button.appendChild(text);

    box.appendChild(button);
}