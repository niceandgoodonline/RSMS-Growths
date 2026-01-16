const actions = [
	{
    "Action": "None",
    "STR": 0,
    "VIT": 0,
    "DEX": 0,
    "AGI": 0,
    "INT": 0,
    "WIL": 0,
    "COM": 0,
    "CHA": 0,
    "HP": 0,
    "BP": 0
  },
  {
    "Action": "Foil",
    "STR": 2,
    "VIT": 2,
    "DEX": 8,
    "AGI": 4,
    "INT": 1,
    "WIL": 1,
    "COM": 2,
    "CHA": 3,
    "HP": 4,
    "BP": 3
  },
  {
    "Action": "Short Sword",
    "STR": 3,
    "VIT": 2,
    "DEX": 7,
    "AGI": 5,
    "INT": 1,
    "WIL": 1,
    "COM": 1,
    "CHA": 2,
    "HP": 5,
    "BP": 3
  },
  {
    "Action": "Long Sword",
    "STR": 4,
    "VIT": 3,
    "DEX": 5,
    "AGI": 3,
    "INT": 1,
    "WIL": 1,
    "COM": 2,
    "CHA": 2,
    "HP": 7,
    "BP": 2
  },
  {
    "Action": "Great Sword",
    "STR": 5,
    "VIT": 5,
    "DEX": 2,
    "AGI": 2,
    "INT": 1,
    "WIL": 1,
    "COM": 2,
    "CHA": 2,
    "HP": 8,
    "BP": 2
  },
  {
    "Action": "Scimitar",
    "STR": 6,
    "VIT": 3,
    "DEX": 3,
    "AGI": 3,
    "INT": 1,
    "WIL": 1,
    "COM": 2,
    "CHA": 2,
    "HP": 6,
    "BP": 3
  },
  {
    "Action": "Hand Axe",
    "STR": 7,
    "VIT": 5,
    "DEX": 3,
    "AGI": 1,
    "INT": 0,
    "WIL": 1,
    "COM": 2,
    "CHA": 2,
    "HP": 8,
    "BP": 1
  },
  {
    "Action": "Club",
    "STR": 3,
    "VIT": 3,
    "DEX": 3,
    "AGI": 3,
    "INT": 3,
    "WIL": 3,
    "COM": 3,
    "CHA": 3,
    "HP": 3,
    "BP": 3
  },
  {
    "Action": "2-Handed Sword",
    "STR": 7,
    "VIT": 6,
    "DEX": 2,
    "AGI": 2,
    "INT": 0,
    "WIL": 0,
    "COM": 1,
    "CHA": 2,
    "HP": 8,
    "BP": 2
  },
  {
    "Action": "Katana",
    "STR": 6,
    "VIT": 3,
    "DEX": 2,
    "AGI": 3,
    "INT": 1,
    "WIL": 4,
    "COM": 2,
    "CHA": 2,
    "HP": 5,
    "BP": 2
  },
  {
    "Action": "2-Handed Axe",
    "STR": 8,
    "VIT": 6,
    "DEX": 1,
    "AGI": 1,
    "INT": 0,
    "WIL": 0,
    "COM": 2,
    "CHA": 2,
    "HP": 9,
    "BP": 1
  },
  {
    "Action": "Staff",
    "STR": 3,
    "VIT": 3,
    "DEX": 3,
    "AGI": 1,
    "INT": 4,
    "WIL": 4,
    "COM": 3,
    "CHA": 2,
    "HP": 5,
    "BP": 2
  },
  {
    "Action": "Polearm",
    "STR": 6,
    "VIT": 4,
    "DEX": 1,
    "AGI": 3,
    "INT": 1,
    "WIL": 2,
    "COM": 2,
    "CHA": 2,
    "HP": 7,
    "BP": 2
  },
  {
    "Action": "Spear",
    "STR": 5,
    "VIT": 4,
    "DEX": 2,
    "AGI": 4,
    "INT": 1,
    "WIL": 2,
    "COM": 2,
    "CHA": 2,
    "HP": 6,
    "BP": 2
  },
  {
    "Action": "Bow",
    "STR": 3,
    "VIT": 2,
    "DEX": 5,
    "AGI": 3,
    "INT": 2,
    "WIL": 4,
    "COM": 2,
    "CHA": 3,
    "HP": 4,
    "BP": 2
  },
  {
    "Action": "Martial Arts",
    "STR": 5,
    "VIT": 7,
    "DEX": 1,
    "AGI": 4,
    "INT": 0,
    "WIL": 2,
    "COM": 1,
    "CHA": 2,
    "HP": 6,
    "BP": 2
  },
  {
    "Action": "Pyrology",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 3,
    "INT": 7,
    "WIL": 4,
    "COM": 3,
    "CHA": 4,
    "HP": 3,
    "BP": 3
  },
  {
    "Action": "Hydrology",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 3,
    "INT": 4,
    "WIL": 5,
    "COM": 7,
    "CHA": 4,
    "HP": 3,
    "BP": 1
  },
  {
    "Action": "Aerology",
    "STR": 0,
    "VIT": 1,
    "DEX": 3,
    "AGI": 4,
    "INT": 6,
    "WIL": 4,
    "COM": 3,
    "CHA": 4,
    "HP": 3,
    "BP": 2
  },
  {
    "Action": "Terrology",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 3,
    "INT": 5,
    "WIL": 5,
    "COM": 4,
    "CHA": 4,
    "HP": 4,
    "BP": 2
  },
  {
    "Action": "Illusions",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 4,
    "INT": 5,
    "WIL": 3,
    "COM": 3,
    "CHA": 8,
    "HP": 2,
    "BP": 2
  },
  {
    "Action": "Demonology",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 3,
    "INT": 4,
    "WIL": 6,
    "COM": 4,
    "CHA": 3,
    "HP": 3,
    "BP": 4
  },
  {
    "Action": "Cosmology",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 2,
    "INT": 4,
    "WIL": 5,
    "COM": 7,
    "CHA": 6,
    "HP": 2,
    "BP": 1
  },
  {
    "Action": "Sorcery",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 3,
    "INT": 5,
    "WIL": 6,
    "COM": 2,
    "CHA": 5,
    "HP": 2,
    "BP": 4
  },
  {
    "Action": "Bewitchery",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 3,
    "INT": 5,
    "WIL": 7,
    "COM": 4,
    "CHA": 4,
    "HP": 3,
    "BP": 1
  },
  {
    "Action": "Necromancy",
    "STR": 0,
    "VIT": 1,
    "DEX": 2,
    "AGI": 4,
    "INT": 6,
    "WIL": 5,
    "COM": 1,
    "CHA": 5,
    "HP": 2,
    "BP": 4
  },
  {
    "Action": "Illegal Charm Actions",
    "STR": 4,
    "VIT": 6,
    "DEX": 3,
    "AGI": 5,
    "INT": 0,
    "WIL": 2,
    "COM": 2,
    "CHA": 2,
    "HP": 3,
    "BP": 3
  }
]
const characters = [
  {
    "Character": "None",
    "STR": 0,
    "VIT": 0,
    "DEX": 0,
    "AGI": 0,
    "INT": 0,
    "WIL": 0,
    "COM": 0,
    "CHA": 0,
    "HP": 0,
    "BP": 0
  },
  {
    "Character": "Aisha",
    "STR": 2,
    "VIT": 1,
    "DEX": 3,
    "AGI": 4,
    "INT": 2,
    "WIL": 3,
    "COM": 5,
    "CHA": 4,
    "HP": 3,
    "BP": 5
  },
  {
    "Character": "Albert",
    "STR": 3,
    "VIT": 4,
    "DEX": 3,
    "AGI": 2,
    "INT": 3,
    "WIL": 4,
    "COM": 1,
    "CHA": 4,
    "HP": 3,
    "BP": 4
  },
  {
    "Character": "Barbara",
    "STR": 3,
    "VIT": 4,
    "DEX": 3,
    "AGI": 3,
    "INT": 2,
    "WIL": 1,
    "COM": 2,
    "CHA": 5,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Claudia",
    "STR": 4,
    "VIT": 3,
    "DEX": 3,
    "AGI": 4,
    "INT": 1,
    "WIL": 3,
    "COM": 2,
    "CHA": 2,
    "HP": 2,
    "BP": 4
  },
  {
    "Character": "Gray",
    "STR": 3,
    "VIT": 3,
    "DEX": 3,
    "AGI": 3,
    "INT": 3,
    "WIL": 3,
    "COM": 3,
    "CHA": 3,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Hawke",
    "STR": 3,
    "VIT": 3,
    "DEX": 4,
    "AGI": 4,
    "INT": 3,
    "WIL": 3,
    "COM": 2,
    "CHA": 1,
    "HP": 4,
    "BP": 3
  },
  {
    "Character": "Jamil",
    "STR": 2,
    "VIT": 1,
    "DEX": 5,
    "AGI": 4,
    "INT": 4,
    "WIL": 3,
    "COM": 1,
    "CHA": 3,
    "HP": 2,
    "BP": 4
  },
  {
    "Character": "Sif",
    "STR": 4,
    "VIT": 5,
    "DEX": 3,
    "AGI": 3,
    "INT": 1,
    "WIL": 2,
    "COM": 1,
    "CHA": 3,
    "HP": 4,
    "BP": 3
  },
  {
    "Character": "Aldora",
    "STR": 3,
    "VIT": 3,
    "DEX": 3,
    "AGI": 3,
    "INT": 5,
    "WIL": 5,
    "COM": 5,
    "CHA": 1,
    "HP": 1,
    "BP": 3
  },
  {
    "Character": "Captain Silver",
    "STR": 5,
    "VIT": 3,
    "DEX": 2,
    "AGI": 2,
    "INT": 4,
    "WIL": 5,
    "COM": 3,
    "CHA": 3,
    "HP": 4,
    "BP": 3
  },
  {
    "Character": "Darque",
    "STR": 1,
    "VIT": 1,
    "DEX": 4,
    "AGI": 4,
    "INT": 5,
    "WIL": 3,
    "COM": 5,
    "CHA": 1,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Diana",
    "STR": 3,
    "VIT": 3,
    "DEX": 4,
    "AGI": 4,
    "INT": 1,
    "WIL": 2,
    "COM": 4,
    "CHA": 3,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Dowd",
    "STR": 3,
    "VIT": 2,
    "DEX": 2,
    "AGI": 2,
    "INT": 2,
    "WIL": 3,
    "COM": 5,
    "CHA": 4,
    "HP": 2,
    "BP": 4
  },
  {
    "Character": "Dragon Knight",
    "STR": 5,
    "VIT": 5,
    "DEX": 3,
    "AGI": 2,
    "INT": 5,
    "WIL": 4,
    "COM": 2,
    "CHA": 1,
    "HP": 5,
    "BP": 3
  },
  {
    "Character": "Farah",
    "STR": 2,
    "VIT": 3,
    "DEX": 4,
    "AGI": 3,
    "INT": 2,
    "WIL": 1,
    "COM": 5,
    "CHA": 3,
    "HP": 2,
    "BP": 2
  },
  {
    "Character": "Flammar",
    "STR": 1,
    "VIT": 3,
    "DEX": 2,
    "AGI": 2,
    "INT": 4,
    "WIL": 4,
    "COM": 5,
    "CHA": 3,
    "HP": 3,
    "BP": 2
  },
  {
    "Character": "Frielei",
    "STR": 2,
    "VIT": 1,
    "DEX": 3,
    "AGI": 5,
    "INT": 5,
    "WIL": 3,
    "COM": 1,
    "CHA": 5,
    "HP": 2,
    "BP": 3
  },
  {
    "Character": "Galahad",
    "STR": 4,
    "VIT": 4,
    "DEX": 2,
    "AGI": 2,
    "INT": 2,
    "WIL": 1,
    "COM": 4,
    "CHA": 1,
    "HP": 4,
    "BP": 2
  },
  {
    "Character": "Gian",
    "STR": 3,
    "VIT": 4,
    "DEX": 4,
    "AGI": 3,
    "INT": 1,
    "WIL": 3,
    "COM": 4,
    "CHA": 1,
    "HP": 4,
    "BP": 2
  },
  {
    "Character": "Guella Ha",
    "STR": 5,
    "VIT": 4,
    "DEX": 1,
    "AGI": 2,
    "INT": 3,
    "WIL": 3,
    "COM": 2,
    "CHA": 2,
    "HP": 4,
    "BP": 2
  },
  {
    "Character": "Herman",
    "STR": 2,
    "VIT": 4,
    "DEX": 3,
    "AGI": 1,
    "INT": 3,
    "WIL": 2,
    "COM": 4,
    "CHA": 2,
    "HP": 2,
    "BP": 4
  },
  {
    "Character": "Marina",
    "STR": 3,
    "VIT": 3,
    "DEX": 3,
    "AGI": 3,
    "INT": 3,
    "WIL": 4,
    "COM": 1,
    "CHA": 5,
    "HP": 2,
    "BP": 1
  },
  {
    "Character": "The Minstrel",
    "STR": 2,
    "VIT": 3,
    "DEX": 2,
    "AGI": 1,
    "INT": 4,
    "WIL": 2,
    "COM": 2,
    "CHA": 5,
    "HP": 3,
    "BP": 2
  },
  {
    "Character": "Monica",
    "STR": 3,
    "VIT": 3,
    "DEX": 4,
    "AGI": 4,
    "INT": 3,
    "WIL": 1,
    "COM": 2,
    "CHA": 4,
    "HP": 2,
    "BP": 3
  },
  {
    "Character": "Myriam",
    "STR": 2,
    "VIT": 2,
    "DEX": 4,
    "AGI": 3,
    "INT": 5,
    "WIL": 2,
    "COM": 2,
    "CHA": 4,
    "HP": 2,
    "BP": 3
  },
  {
    "Character": "Neidhart",
    "STR": 5,
    "VIT": 3,
    "DEX": 2,
    "AGI": 3,
    "INT": 4,
    "WIL": 1,
    "COM": 1,
    "CHA": 5,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Patrick",
    "STR": 2,
    "VIT": 1,
    "DEX": 1,
    "AGI": 2,
    "INT": 4,
    "WIL": 4,
    "COM": 4,
    "CHA": 5,
    "HP": 3,
    "BP": 4
  },
  {
    "Character": "Raphael",
    "STR": 4,
    "VIT": 3,
    "DEX": 2,
    "AGI": 2,
    "INT": 2,
    "WIL": 4,
    "COM": 4,
    "CHA": 4,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Schiele",
    "STR": 1,
    "VIT": 4,
    "DEX": 3,
    "AGI": 3,
    "INT": 5,
    "WIL": 4,
    "COM": 2,
    "CHA": 5,
    "HP": 3,
    "BP": 3
  },
  {
    "Character": "Brau",
    "STR": 4,
    "VIT": 5,
    "DEX": 1,
    "AGI": 3,
    "INT": 1,
    "WIL": 4,
    "COM": 3,
    "CHA": 4,
    "HP": 5,
    "BP": 2
  },
  {
    "Character": "Red Mage",
    "STR": 1,
    "VIT": 2,
    "DEX": 2,
    "AGI": 5,
    "INT": 5,
    "WIL": 3,
    "COM": 1,
    "CHA": 1,
    "HP": 3,
    "BP": 2
  },
  {
    "Character": "Sylvan",
    "STR": 2,
    "VIT": 1,
    "DEX": 2,
    "AGI": 4,
    "INT": 3,
    "WIL": 5,
    "COM": 5,
    "CHA": 5,
    "HP": 2,
    "BP": 3
  },
  {
    "Character": "Theodore",
    "STR": 5,
    "VIT": 2,
    "DEX": 3,
    "AGI": 2,
    "INT": 1,
    "WIL": 3,
    "COM": 1,
    "CHA": 4,
    "HP": 2,
    "BP": 3
  },
  {
    "Character": "Mercenary (all)",
    "STR": 2,
    "VIT": 2,
    "DEX": 2,
    "AGI": 2,
    "INT": 2,
    "WIL": 2,
    "COM": 2,
    "CHA": 2,
    "HP": 2,
    "BP": 2
  }
]
const GOOD_GROWTH = 6.5
const OK_GROWTH = 2.5

let actionsTableDataAsArray = [].slice.call(document.getElementById("actionsTableRow").children)
const actionsTableData = actionsTableDataAsArray.slice(1, actionsTableDataAsArray.length)
let currentActionData = actions[0]

let charactersTableDataAsArray = [].slice.call(document.getElementById("charactersTableRow").children)
const charactersTableData = charactersTableDataAsArray.slice(1, charactersTableDataAsArray.length)
var currentCharacterData = characters[0]

let totalTableDataAsArray = [].slice.call(document.getElementById("totalsTableRow").children)
const totalTableData = totalTableDataAsArray.slice(1, totalTableDataAsArray.length)

function loadAction(actionElement) {
	actions.forEach((action) => {
		if (action.Action === actionElement.innerHTML) {
			let count = 0
			currentActionData = action
			for (const [key, value] of Object.entries(action)) {
				let elem = actionsTableData[count]
				elem.innerHTML = value
				if (key != "Action") {
					setGrowthColor(elem)
				}
				count++
			}
		}
	})
	updateTotals()
}

function loadCharacter(characterElement) {
	characters.forEach((character) => {
		if (character.Character === characterElement.innerHTML) {
			let count = 0
			currentCharacterData = character
			for (const [key, value] of Object.entries(character)) {
				let elem = charactersTableData[count]
				elem.innerHTML = value
				if (key != "Character") {
					setGrowthColor(elem)
				}
				count++
			}
		}
	})
	updateTotals()
}

function updateTotals() {
	let count = 0
	for (const [key, value] of Object.entries(currentActionData)) {
		if (key === "Action") continue;
		let elem = totalTableData[count + 1]
		elem.innerHTML = currentActionData[key] + currentCharacterData[key]
		setGrowthColor(elem)
		count++
	}
}

function setGrowthColor(elem) {
	if (elem.innerHTML >= GOOD_GROWTH) {
		elem.classList = "growthGood"
	} else if (elem.innerHTML >= OK_GROWTH) {
		elem.classList = "growthOk"
	} else {
		elem.classList = "growthBad"
	}
}

function toggleActionsDropdown() {
  document.getElementById("actionsDropdown").classList.toggle("show");
}

function toggleCharactersDropdown() {
  document.getElementById("charactersDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
