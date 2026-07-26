import {
  Entity,
  RelationshipType,
} from "@dark-sloth/core";

export class OntologyRules {

  private rules: Record<
    RelationshipType,
    {
      from: Entity["type"][];
      to: Entity["type"][];
    }
  > = {
    FOUNDED: {
      from: ["PERSON", "ORGANIZATION"],
      to: ["ORGANIZATION"],
    },

    CREATED: {
      from: [
        "PERSON",
        "ORGANIZATION",
      ],
      to: [
        "DOCUMENT",
        "ARTIFACT",
        "CONCEPT",
      ],
    },

    AUTHORED: {
      from: ["PERSON"],
      to: ["DOCUMENT"],
    },

    LOCATED_IN: {
      from: [
        "PERSON",
        "ORGANIZATION",
        "ARTIFACT",
      ],
      to: ["PLACE"],
    },

    MENTIONS: {
      from: ["DOCUMENT"],
      to: [
        "PERSON",
        "PLACE",
        "CONCEPT",
        "ORGANIZATION",
      ],
    },

    REFERENCES: {
      from: ["DOCUMENT"],
      to: ["DOCUMENT"],
    },

    RELATED_TO: {
      from: [
        "PERSON",
        "PLACE",
        "CONCEPT",
        "ORGANIZATION",
        "DOCUMENT",
        "ARTIFACT",
      ],
      to: [
        "PERSON",
        "PLACE",
        "CONCEPT",
        "ORGANIZATION",
        "DOCUMENT",
        "ARTIFACT",
      ],
    },
  };


  validate(
    relationshipType: RelationshipType,
    from: Entity,
    to: Entity
  ): boolean {

    const rule =
      this.rules[relationshipType];

    if (!rule) {
      return false;
    }

    return (
      rule.from.includes(from.type) &&
      rule.to.includes(to.type)
    );
  }
}
