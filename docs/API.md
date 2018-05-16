# API
File describing API Routes

## Client
Routes hydrating SPA
- [ ] /ritual
	- [ ] POST
		- [ ] posts one ritual entry
		- [ ] posts one or more ritual entries
		- [ ] returns error on duplicate
	- [ ] GET
		- [ ] Takes GET variable for accessing specific ritual by ID
		- [ ] Defaults to retriving all rituals
	- [ ] PUT
		- [ ] Updates a specific ritual by ID
	- [ ] DELETE
		- [ ] Archives a specific ritual by ID
- [ ] /completion
	- [ ] POST
		- [ ] posts one or more completions
	- [ ] GET
		- [ ] Takes GET variable for accessing specific completions by date
		- [ ] Defaults to retriving all completions for the past week
	- [ ] PUT
		- [ ] Updates a specific completion by ID
	- [ ] DELETE
		- [ ] Archives a specific completion by ID




## Integrations