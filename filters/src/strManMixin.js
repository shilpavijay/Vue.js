export const strMan = {
	data() {
		return {
			text1: "Hello World!!!"
		}
	},
    computed: {
        'revText'() {
          return this.text1.split('').reverse().join('');
        },
        'textWithCount'() {
          return this.text1 + ' (' + this.text.length + ')' ;
        }
      },
}