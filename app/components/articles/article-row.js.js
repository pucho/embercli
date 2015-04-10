import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	article: null, //passed-in
	articleStates: null, //passed in
	autosave: function(){
		var article = this.get('article');
		if (!article.get('isNew')) {
			this.sendAction('save', article);
		}
	},
	stateChanged: Ember.observer('article.state', function(){
		var article = this.get('article');
		if (article.get('isDirty') && !article.get('isSaving')){
			Ember.run.once(this, this.autosave);
		}
	}).on('init')
});
