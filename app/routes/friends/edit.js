import Ember from 'ember';

export default Ember.Route.extend({
	deactivate: function() {
		var model = this.modelFor('friends/edit');
		model.rollback();
	},

	isValid: Ember.computed(
		'model.email',
		'model.firstName',
		'model.lastName',
		'model.twitter',
		function() {
			return !Ember.isEmpty(this.get('model.email')) &&
				!Ember.isEmpty(this.get('model.firstName')) &&
				!Ember.isEmpty(this.get('model.lastName')) &&
				!Ember.isEmpty(this.get('model.twitter'));
		}
	),

	actions: {
		save: function() {
			if (this.get('isValid')) {
				this.get('model').save().then( (friend) => {
					this.transitionToRoute('friends.show', friend);
			});
		} else {
			this.set('errorMessage', 'You have to fill all the fields');
		}
		return false;
		},

		cancel: function(){
			this.transitionToRoute('friends.show', this.get('model'));

			return false;
		}

	}
	
});
