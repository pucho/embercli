import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Route.extend({
	queryParams: {
		sortBy: {
			refreshModel: true
		},
		sortAscending: {
			refreshModle: true
		}
	},
	model: function() {
		return this.store.findQuery('friend', params);
	}
});