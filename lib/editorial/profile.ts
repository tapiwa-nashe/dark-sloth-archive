export interface ArchiveBookProfile {

  title: {

    font: string;

    size: number;

    alignment: string;

  };


  author: {

    font: string;

    size: number;

    alignment: string;

  };


  chapter: {

    prefix: string;

    uppercase: boolean;

    pageBreak: boolean;

  };


  body: {

    font: string;

    size: number;

    lineSpacing: number;

    alignment: string;

  };


  metadata: {

    enabled: boolean;

    labels: string[];

  };

}



export const DarkSlothArchiveProfile: ArchiveBookProfile = {

  title: {

    font:
      "Archive Display",

    size:
      28,

    alignment:
      "center"

  },


  author: {

    font:
      "Archive Body",

    size:
      14,

    alignment:
      "center"

  },


  chapter: {

    prefix:
      "CHAPTER",

    uppercase:
      true,

    pageBreak:
      true

  },


  body: {

    font:
      "Archive Serif",

    size:
      11,

    lineSpacing:
      1.5,

    alignment:
      "justify"

  },


  metadata: {

    enabled:
      true,

    labels:[

      "Recovery Record",

      "STATUS",

      "CLASSIFICATION",

      "FINAL RECOVERY NOTE"

    ]

  }

};
