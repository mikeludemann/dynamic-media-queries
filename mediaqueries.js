import { css } from "styled-components";

const sizes = {
	xxl: 1600,
	xl: 1200,
	l: 992,
	m: 768,
	s: 576,
	xs: 400,
}

const mediaqueries = Object.keys(sizes).reduce((all, value) => {

	all[value] = (...args) => css`
		@media (min-width: ${sizes[value] / 16}em) {
			${css(...args)}
		}
	`

  return all

}, {})

export default mediaqueries;
