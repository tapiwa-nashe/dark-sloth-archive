export class OntologyRules {
    rules = {
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
    validate(relationshipType, from, to) {
        const rule = this.rules[relationshipType];
        if (!rule) {
            return false;
        }
        return (rule.from.includes(from.type) &&
            rule.to.includes(to.type));
    }
}
