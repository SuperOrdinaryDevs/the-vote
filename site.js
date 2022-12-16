const graphQlApi = 'https://hub.snapshot.org/graphql';

var space1_proposals = `query Proposals {
                          proposals(first: 20, skip: 0, where: {space_in: ["nicholausm.eth"]}, orderBy: "created", orderDirection: desc) {
                            title
                            body
                            choices
                            start
                            end
                            snapshot
                            state
                            scores
                            scores_by_strategy
                            scores_total
                            scores_updated
                            author
                            space {
                              id
                              name
                            }
                          }
                        }
                        `;

var space2_proposals = `query Proposals {
                          proposals(first: 20, skip: 0, where: {space_in: ["sovvault.eth"]}, orderBy: "created", orderDirection: desc) {
                            title
                            body
                            choices
                            start
                            end
                            snapshot
                            state
                            scores
                            scores_by_strategy
                            scores_total
                            scores_updated
                            author
                            space {
                              id
                              name
                            }
                          }
                        }
                        `;

fetch(graphQlApi, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query : space1_proposals
  }),
})
.then((r) => r.json())
.then((data) => {
  var elem = document.querySelector('#supers #proposal-name'); 
  var elem2 = document.querySelector('#supers #proposal-votes'); 
  var proposals = data.data.proposals
  console.log(data);

  elem.innerText = JSON.stringify(proposals[0].title); 
  elem2.innerText = proposals[0].scores[0] + " - " + proposals[0].scores[1]; 
}
  );

  fetch(graphQlApi, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query : space2_proposals
  }),
})
.then((r) => r.json())
.then((data) => {
  var elem = document.querySelector('#capes #proposal-name'); 
  var elem2 = document.querySelector('#capes #proposal-votes'); 
  var proposals = data.data.proposals
  console.log(data);
  elem.innerText = JSON.stringify(proposals[0].title); 
  elem2.innerText = proposals[0].scores[0] + " - " + proposals[0].scores[1]; 
}
);