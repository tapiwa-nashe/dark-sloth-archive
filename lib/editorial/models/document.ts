export interface ArchiveDocument {

  title:string;

  author:string;

  metadata:{

    recoveryRecord?:string;

    status?:string;

    classification?:string;

  };


  chapters:{

    title:string;

    content:string;

  }[];

}
