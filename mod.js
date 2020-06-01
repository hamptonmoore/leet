import map from './map.js'

export default function leet(text) {
	if (!text) throw 'missing text'

	return text = text.split('').map(letter => map[letter.toLowerCase()] || letter).join('')
}
