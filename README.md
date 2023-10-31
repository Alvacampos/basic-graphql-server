# Intro

Basic GraphQL Server for learning purposes and to be used in the future CV Project

## Basic Query

```graphql
query ExampleQuery($id: ID!) {
  person(id: $id) {
    name
    birth
    sex
    careerStart
    linkedIn
    skills {
      name
    }
    jobs {
      name
      text
      date
      projects {
        name
        text
        skills {
          name
        }
      }
    }
  }
}
```

ID: 1 or 2.
