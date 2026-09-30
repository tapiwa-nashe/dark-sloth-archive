export interface ArchiveDocument {

  title:string;

  author:string;

  metadata:{

    recoveryRecord?:string;

    status?:string;

    classification?:string;

  };


  chapters:{

    number:number;

    title:string;

    recovery?:string;

    openingQuestion?:string;

    content:string;

  }[];

}
