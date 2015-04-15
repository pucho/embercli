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
	stateChanged: Ember.observer('model.state', function(){
		if (this.get('model.isDirty') && !this.get('model.isSaving')){
			Ember.run.once(this, this.autosave);
		}
	}).on('init')
});
