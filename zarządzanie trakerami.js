const b_attrs = {
    "harm": {
        "label": "Harm",
        "description": "When you reach 4 or more, mark unstable.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Clock",
        "value": 0,
        "max": 7,
        "steps": [false,false,false,false,false,false,false]
    },
    "unstable": {
        "label": "Unstable",
        "description": "(Unstable injuries will worsen as time passes)",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Checkbox",
        "checkboxLabel": "Unstable Injuries",
        "value": false
    },
    "luck": {
        "label": "Luck",
        "description": "Mark luck to change a roll to 12 or avoid all harm.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Clock",
        "value": 0,
        "max": 7,
        "steps": [false,false,false,false,false,false,false]
    },
    "xp": {
        "label": "Experience",
        "description": "When you roll a miss, or when a move says to, mark Xp.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Xp",
        "value": 0,
        "max": 5,
        "steps": [false,false,false,false,false]
    },
    "armour": {
        "label": "Armour",
        "description": "Armour reduces harm suffered by the armour rating.",
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "Number",
        "value": 0
    },
    "luckspecial": {
        "label": "Luck Special",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    },
    "look": {
        "label": "Look",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    },
    "improvements": {
        "label": "Improvements",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    },
    "advancedimprovements": {
        "label": "Advanced Improvements",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    }
};
const playbookTrackers = [
    {
        "label": "Pochłonięta Magia",
        "type": "LongText",
        "position": "left",
    },
    {
        "label": "Integracja",
        "type": "LongText",
        "position": "left",
        "value": "<p>Wybierz Ulepszenia (dwa)</p><ul><li>Zawsze połączony</li><li>Specjalistyczne narzędzia</li><li>Spec ds. Bezpieczeństwa</li><li>Baza danych wywiadowczych</li><li>Wspomaganie celowania</li><li>Wyświetlacz holograficzny</li><li>Przejściówki na wszystko</li><li>Szybkie pisanie</li></ul><p>Wybierz Usterkę (jedna)</p><ul><li>Tylko na swoim sprzęcie</li><li>Hakowalny any mózg</li><li>Specjalistyczna konserwacja</li><li>Niezdyscyplinowany</li><li>Przereklamowana reputacja</li><li>Zbytnia pewność siebie</li><li>Awaryjne implanty</li></ul><p>Następnie wybierz, w jaki sposób zdobyłeś te umiejętności:</p><ul><li>Przebudowany: Zostałeś odbudowany po doświadczeniu bliskim śmierci lub rzeczywistej śmierci. Kto pomyślał, że jesteś na tyle ważny, by cię utrzymać przy życiu?</li><li>Techno-Magia: Masz magiczną więź z maszynami. Jak zdobyłeś lub odkryłeś swoje moce?</li><li>Ochotnik: Zgłosiłeś się na ochotnika do ulepszenia. Kto miał technologię, aby to zrobić?</li><li>Geniusz: Czysty geniusz i ciężka praca. Jakie wydarzenie przyniosło ci reputację i jak sprawia ci kłopoty?</li><li>Sztuczny: Zostałeś stworzony w ten sposób. Jaki był twój pierwotny cel? Czy go przekroczyłeś?</li></ul>"
    },
    {
        "label": "Stanu Związku",
        "desc": "Po zapełnieniu wasza relacja się rozpada",
        "max": 10,
        "position": "left",
        "type": "Clock"
    },
    {
        "label": "Ekspatriacja",
        "type": "LongText",
        "position": "left",
        "value": "<p>Jak wyglądała kultura w twoim domu?</p><ul><li>Feudalny, imperialny, demokratyczny, teokratyczny, merkantylny, egalitarny, merytokratyczny</li><li>Samotna planeta macierzysta, samotny układ, siedliska kosmiczne, międzygwiezdne, koczownicze, rozproszone światy</li><li>System kastowy, zrujnowany wojną, tyraniczny, pokojowy, racjonalistyczny, zaawansowany technologicznie, prymitywny technologicznie</li></ul><p>Dlaczego odszedłeś?</p><ul><li>Musiałeś uciec</li><li>Jesteś zwiadowcą, odkrywającym nowe światy</li><li>Jesteś turystą, szukającym ciekawych doświadczeń</li><li>Jesteś emisariuszem</li></ul><p>Dlaczego osiadłeś na Ziemi?</p><ul><li>Zaprzyjaźnić się</li><li>Nauczać</li><li>Uczyć się</li><li>Chronić ją</li></ul><p>Dlaczego musisz wrócić?</p><ul><li>Relacje</li><li>Wrogowie</li><li>Obowiązki</li><li>Tęsknota za domem</li></ul>"
    },
    {
        "label": "Strata",
        "type": "LongText",
        "position": "left",
        "value": "<p>Kogo straciłeś?</p><ul><li>Rodzica/ów</li><li>Rodzeństwo</li><li>Partnera</li><li>Dzieci</li><li>Najlepszego Przyjaciela</li></ul><p>Kto to zrobił? ___</p><p>Dlaczego tego nie powstrzymałeś?</p><ul><li>Z Błędu</li><li>Z powodu Ran</li><li>Wyparcia</li><li>ze strachu</li><li>ze słabości</li><li>samolubności</li><li>zbyt wolno zareagowałem</li></ul>"
    },
    {
        "label": "Lont",
        "desc": "Masz krótki lont",
        "max": 10,
        "position": "left",
        "type": "Clock"
    },
    {
        "label": "Hobby",
        "type": "LongText",
        "value": "Próbujesz dopasować się do ludzi. Wybierz swoje hobby: cygara, zwierzęta, sport, fast food, kapelusz, filmy, komiksy, luksusowe jedzenie, antyki, programy telewizyjne, klasyczne samochody"
    }
];
function addTrack ({label, desc, max, position, type, value}) {
    const track = {
        customLabel: false,
        description: desc,
        label: label,
        position: position,
        type: type,
        userLabel: false,
    }

    switch (type) {
        case "Clock":
            track.steps = Array(max).fill(false)
            track.max = max
        case "Number":
            track.value = value||0
            break;
        case "LongText":
            track.value = value||""
            break;
        case "ListMany":
            track.options = value||{}
            break;
        default:
            break;
    }
    return track
}

function createActorList() {
    const list = document.createElement('select');
    list.classList.add('actorName')
    game.actors.filter( ({ownership, type}) => ownership[game.users.current.id] === 3 && type == "character").forEach( ({name})=> {
        const option = document.createElement('option');
        option.setAttribute('value', name);
        option.innerText = name;
        list.appendChild(option);
    })
    return list.outerHTML
}

async function trackDialog(actor) {
    const tracks = actor.system.attributes, table = document.createElement('table');
    Object.keys(tracks).forEach( key => {
        const track = tracks[key];
        if ( track === '' && b_attrs[key] ) {
            table.innerHTML += `<td>${b_attrs[key].label}</td><td>Brak</td><td><label><input type="checkbox" data-key="${key}" value="reset">Restet</label>|<label><input type="checkbox" data-key="${key}" value="del">Usuń</label></td>`
        }
        else if (track === '') return ;
        else {
            table.innerHTML += `<td>${track.label}</td><td>${track.type}${["Clock","Xp"].includes(track.type) ? `(${track.max})`  : ''}</td><td><label><input type="checkbox" data-key="${key}" value="reset">Restet</label>|<label><input type="checkbox" data-key="${key}" value="del">Usuń</label></td>`;
        }
    })
    playbookTrackers.forEach( track => {
        if ( Object.keys(tracks).includes(track.label) && tracks[track.label] !== '' ) return;
        table.innerHTML += `<td>${track.label}</td><td>${track.type}${["Clock","Xp"].includes(track.type) ? `(${track.max})`  : ''}</td><td><label><input type="checkbox" data-key="${track.label}" value="add">Dodaj</label></td>`;
        
    })

    return new Dialog({
        title: actor.name,
        content: `${table.outerHTML}`,
        buttons: {
            submit: {
                label: "Przeładuj",
                callback: async ( html ) => {
                    const checks = html.find('input:checked'),result = {};
                    for(let check of checks) {
                        const label = check.getAttribute('data-key');
                        switch (check.value) {
                            case "reset":
                                result[label] = b_attrs[label];
                                break;
                            case "del":
                                result[label] = '';
                                break;
                            case "add":
                                result[label] = addTrack(playbookTrackers.filter( x => x.label === label )[0])
                                break;
                            default:
                                break;
                        }
                    }
                    actor.update({
                        "system.attributes": Object.assign({
                            ...actor.system.attributes,
                            ...result
                        })
                    }).then( ()=> {
                        trackDialog(actor)
                    })
                }
            },
        }
    }).render(true);
}

let actorPlaybook = new Dialog({
    title: "Wybierz postać i playbook",
    content: `<div>Postać: ${createActorList()}<p>Są to tylko te postacie, które możesz edytować.</p></div>`,
    buttons: {
        getItem: {
            label: "Zarządzaj zegarami",
            callback: async (html) => {
                trackDialog(
                    game.actors.find( ({name}) => name == html.find('.actorName').val() ),
                )
            }
        }
    }
}).render(true);