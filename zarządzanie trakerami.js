const b_attrs = {
    "harm": {
        "label": "Rany",
        "description": "Po otrzymaniu 4 Rany stajesz się Niestabilny.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Clock",
        "value": 0,
        "max": 7,
        "steps": [false,false,false,false,false,false,false]
    },
    "unstable": {
        "label": "Niestabilny",
        "description": "Twój stan będzie się pogarszał z czasem.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Checkbox",
        "checkboxLabel": "Niestabliność",
        "value": false
    },
    "luck": {
        "label": "Fuks",
        "description": "Zamień wynik na 12 lub uniknij obrażeń.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Clock",
        "value": 0,
        "max": 7,
        "steps": [false,false,false,false,false,false,false]
    },
    "xp": {
        "label": "Doświadczenie",
        "description": "Przy porżce lub kiedy mówi o tym ruch.",
        "customLabel": false,
        "userLabel": false,
        "position": "top",
        "type": "Xp",
        "value": 0,
        "max": 5,
        "steps": [false,false,false,false,false]
    },
    "armour": {
        "label": "Pancerz",
        "description": "Chroni przed otrzymaniem Ran.",
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "Number",
        "value": 0
    },
    "luckspecial": {
        "label": "Zasada Fuksa",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    },
    "look": {
        "label": "Wygląd",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    },
    "improvements": {
        "label": "Rozwinięcia",
        "description": null,
        "customLabel": false,
        "userLabel": false,
        "position": "left",
        "type": "LongText",
        "value": ""
    },
    "advancedimprovements": {
        "label": "Rozwinięcia Zaaw.",
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
        "label": "Druga Miłość",
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

function cellOpt(key, option) {
    const cell = document.createElement('td');
    switch (option) {
        case 'reset':
            cell.innerHTML = `<label><input type="checkbox" data-key="${key}" value="reset">Restet</label>`;
            break;
        case 'delete':
            cell.innerHTML = `<label><input type="checkbox" data-key="${key}" value="del">Usuń</label>`;
            break;
        case 'add':
            cell.setAttribute('colspan',"3");
            cell.innerHTML = `<label><input type="checkbox" data-key="${key}" value="add">Dodaj</label>`;
            break;
        case 'edit':
            cell.innerHTML = `<label><input name="edit" type="radio" data-key="${key}" value="edit">Edytuj</label>`;
            break;
        default: break;
    }
    return cell.outerHTML;
}

async function editTrackDialog(actor, attr, customKey) {
    const form = document.createElement('div');
    
    // name 
    form.innerHTML += `<label>Nazwa: <input type="text" name="label" value="${attr.label}" ${attr.label ? 'disabled' : ''}/></label>`;
    // opis
    form.innerHTML += `<label>Opis: <input type="text" name="desc" value="${attr.description||''}" /></label>`;
    // value
    form.innerHTML += `<label>Wartość: <input type="text" name="value" value="${attr.value||''}" /></label>`;
    // max
    form.innerHTML += `<label>Max: <input type="number" name="max" value="${attr.max||0}" /></label>`;
    // position
    form.innerHTML += `<select name="position"><option value="top">Góra</option><option value="left">Lewo</option></select>`;
    // type
    form.innerHTML += `<select name="type"><option value="Clock">Zegar</option><option value="Checkbox">Checkboxy</option><option value="Xp">Doświadczenie</option><option value="Number">Liczba</option><option value="LongText">Tekst</option><option value="ListMany">Lista</option></select>`;

    return new Dialog({
        title: `${actor.name} ${attr.label||'Nowy'}`,
        content: `${form.outerHTML}`,
        buttons: {
            submit: {
                label: "Zatwierdź",
                callback: async ( html ) => {
                    const data = {
                        label: html.find('[name="label"]').val(),
                        desc: html.find('[name="desc"]').val(),
                        value: html.find('[name="value"]').val(),
                        max: html.find('[name="max"]').val(),
                        position: html.find('[name="position"]').val(),
                        type: html.find('[name="type"]').val(),
                    };
                    /// TESTS
                    if ( data.label === '' || data.label !== attr.label) 
                        console.error('Niewłaściwy Label');
                    if (['Clock', 'Xp', 'Number'].includes(data.type) && isNaN(parseInt(data.value)) )
                        console.error('Wartość musi być liczbą')
                    
                    actor.update({
                        [`system.attributes.${customKey||data.label}`]: addTrack(data)
                    })
                }
            }
        }
    }).render(true);
}

async function trackDialog(actor) {
    const tracks = actor.system.attributes, table = document.createElement('table');
    table.classList.add('tracksTable');
    const style = `.tracksTable td{border:1px solid;padding:2px}.tracksTable td:has([type="checkbox"]:checked){background:lightgreen}.tracksTable td:has([type="radio"]:checked){background:lightblue}.tracksTable td input:is([type="checkbox"],[type="radio"]){display:none}.tracksTable td:not(:first-child){text-align:center}.tracksTable label{cursor:pointer}`;
    table.innerHTML += `<style>${style}</style>`;
    Object.keys(tracks).forEach( key => {
        const track = tracks[key];
        if ( track === '' && b_attrs[key] ) {
            table.innerHTML += `<td>${b_attrs[key].label}</td><td>Brak</td>${cellOpt(key,"edit")}${cellOpt(key,"reset")}${cellOpt(key,"delete")}`
        }
        else if (track === '') return ;
        else {
            table.innerHTML += `<td>${track.label}</td><td>${track.type}${["Clock","Xp"].includes(track.type) ? `(${track.max})`  : ''}</td>${cellOpt(key,"edit")}${cellOpt(key,"reset")}${cellOpt(key,"delete")}`;
        }
    })
    playbookTrackers.forEach( track => {
        if ( Object.keys(tracks).includes(track.label) && tracks[track.label] !== '' ) return;
        table.innerHTML += `<td>${track.label}</td><td>${track.type}${["Clock","Xp"].includes(track.type) ? `(${track.max})`  : ''}</td>${cellOpt(track.label,"add")}`;
        
    })

    return new Dialog({
        title: actor.name,
        content: `${table.outerHTML}`,
        buttons: {
            reload: {
                label: "Przeładuj",
                callback: async ( html ) => {
                    const checks = html.find('input[type="checkbox"]:checked'),result = {};
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
                    }).then( ()=> trackDialog(actor) )
                }
            },
            add: {
                label: "Stwórz własny / Edytuj wybrany",
                callback: async ( html ) => {
                    const checks = html.find('input[type="radio"]:checked');
                    if (checks.length) {
                        const attr = actor.system.attributes[checks[0].getAttribute('data-key')];
                        editTrackDialog( actor, attr );
                    } else
                        editTrackDialog( 
                            actor,
                            { "label": "", "type": "", "position": "left" },
                            checks[0].getAttribute('data-key')
                        );
                }
            }
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