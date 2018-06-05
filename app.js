const cards = [
    {class:'Primary Task', front: 'Reduction', back: 'Simplify the task they are trying to do', flipped: false, },
    {class:'Primary Task',front: 'Tunneling', back: 'Guide them step-by-step', flipped: false, },
    {class:'Primary Task',front: 'Tailoring', back: 'Tailor the information for them as part of a group', flipped: false, },
    {class:'Primary Task',front: 'Personalization', back: 'Customize system on a personal level for them', flipped: false, },
    {class:'Primary Task',front: 'Self-monitoring', back: 'Enables them to track their own behaviour to alter it to achieve a pre-meditated outcome', flipped: false, },
    {class:'Primary Task',front: 'Simulation', back: 'Simulate before and after effects of a target behaviour', flipped: false, },
    {class:'Primary Task',front: 'Rehearsal', back: 'Rehearse target behaviour', flipped: false, },


    {class:'Dialogue',front: 'Praise', back: 'Give positive feedback to user using images/ symbols/ sounds/ words', flipped: false, },
    {class:'Dialogue',front: 'Rewards', back: 'Virtual rewards to give them the credit', flipped: false, },
    {class:'Dialogue',front: 'Reminders', back: 'Remind them of their target behaviour during usage', flipped: false, },
    {class:'Dialogue',front: 'Suggestions', back: 'Suggest them behaviour changes during system use', flipped: false, },
    {class:'Dialogue',front: 'Similarity', back: 'Imitate them in some specific way', flipped: false, },
    {class:'Dialogue',front: 'Liking', back: 'Having a look and feel that appeals to them', flipped: false, },
    {class:'Dialogue',front: 'Social Roles', back: 'Adopt to a social role', flipped: false, },


    {class:'Credibility', front: 'Trustworthiness', back: 'Provide information that is truthful, unbiased, and fair', flipped: false, },
    {class:'Credibility',front: 'Expertise', back: 'Provide information showing knowledge, experience, and competence', flipped: false, },
    {class:'Credibility',front: 'Surface Credibility', back: 'System should have competent look and feel', flipped: false, },
    {class:'Credibility',front: 'Real-World Feel', back: 'Provide information of the organization/people behind the content and services', flipped: false, },
    {class:'Credibility',front: 'Autority', back: 'Refer to people of authority', flipped: false, },
    {class:'Credibility',front: '3rd party endorsements', back: 'Recommendations from other trusted entities counts', flipped: false, },
    {class:'Credibility',front: 'Verifiability', back: 'Provide means to verify claims by providing citations', flipped: false, },


    {class:'Social',front: 'Social Learning', back: 'People look at each other while performing behaviours', flipped: false, },
    {class:'Social',front: 'Social Comparison', back: 'Provide means to compare performance with others', flipped: false, },
    {class:'Social',front: 'Normative Influence', back: 'Provide means for them to see the norm, it influences their decision', flipped: false, },
    {class:'Social',front: 'Social Facilitation', back: 'Provide means for finding others performing the same target behaviour', flipped: false, },
    {class:'Social',front: 'Cooperation', back: 'Provide means to cooperating with others', flipped: false, },
    {class:'Social',front: 'Competition', back: 'Provide means for competing with others ', flipped: false, },
    {class:'Social',front: 'Recognition', back: 'Give public recognition to user performing target behaviour', flipped: false, },
];

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '',
    error: false
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    addNew: function(){
      //!this.newFront || !this.newBack also works
      if(!this.newFront.length || !this.newBack.length){
        this.error = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    }
  }
});
