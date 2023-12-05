import { defineConfig } from "tinacms";
import { accueilFields } from "./config/home";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        label: "Page d'Accueil",
        name: "accueil",
        path: "content/english",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_index",
        },

        fields: [
          {
            name: 'banner',
            label: 'Baniere',
            type:'object',
            fields: [
                {
                    name: 'title',
                    label: 'Titre',
                    type: 'string',
                }
            ],
          },
          {
              name: 'about',
              label: 'A propos',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'content',
                      label: 'Texte',
                      type: 'string',
                      ui: {
                          component: "textarea"
                      },
                  },
                  {
                      name: 'button',
                      label: 'Bouton',
                      type: 'object',
                      fields: [
                          {
                              name: 'enable',
                              label: 'Activer',
                              type: 'boolean',
                          },
                          {
                              name: 'label',
                              label: 'Texte du bouton',
                              type: 'string',
                          },
                          {
                              name: 'URL',
                              label: 'Lien du  bouton',
                              description: '',
                              type: 'string',
                          },
                      ]
                  },
              ],
          },
          {
              name: 'skill',
              label: 'Mes compétence',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
                  {
                      name: 'item',
                      label: 'Competences',
                      type: 'object',
                      list: true,
                      ui: {
                        itemProps: (item) => {
                          return { name: item?.title}
                        },
                        defaultItem: {
                          title: "Competence",
                          progress: "90%",
                          color: "#fdb157"
                        }
                      },
                      fields:[
                          {
                              name: 'title',
                              label: 'Titre',
                              type: 'string',
                          },
                          {
                              name: 'progress',
                              label: 'Niveau de Competences',
                              type: 'string',
                          },
                          {
                              name: 'color',
                              label: 'Couleur',
                              type: 'string',
                              ui: {
                                  component: 'color',
                                  colorFormat: 'hex',
                                }
                          },
                      ]
                  },
              ],
          },
          {
              name: 'experience',
              label: 'Experience',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
                  {
                      name: 'item',
                      label: 'Experiences',
                      type: 'object',
                      list: true,
                      ui: {
                        itemProps: (item) => {
                          return { name: `${item?.title} `}
                        },
                        defaultItem: {
                          logo: "images/experience/icon-1.png",
                          title: "Experience",
                          company : "WEBEX",
                          duration : "Jan 2007 - Feb 2009",
                        }
                      },
                      fields:[
                          {
                              name: 'logo',
                              label: 'Logo',
                              type: 'image',
                          },
                          {
                              name: 'title',
                              label: 'Titre',
                              type: 'string',
                          },
                          {
                              name: 'company',
                              label: 'Entreprise',
                              type: 'string',
                          },
                          {
                              name: 'duration',
                              label: 'Durer',
                              type: 'string',
                          },
                      ],
                  }
              ]
          },
          {
              name: 'education',
              label: 'Education',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
                  {
                      name: 'item',
                      label: 'Educations',
                      type: 'object',
                      list: true,
                      ui: {
                        itemProps: (item) => {
                          return { name: `${item?.title} `}
                        },
                        defaultItem: {
                          title: "Education",
                          year : "2023",
                          academy : "nom d'ecole",
                        }
                      },
                      fields:[
                          {
                              name: 'title',
                              label: 'Titre',
                              type: 'string',
                          },
                          {
                              name: 'year',
                              label: 'Année',
                              type: 'string',
                          },
                          {
                              name: 'academy',
                              label: 'Ecole',
                              type: 'string',
                          },
                      ],
                  }
              ]
          },
          {
              name: 'service',
              label: 'Services',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
                  {
                      name: 'item',
                      label: 'Services',
                      type: 'object',
                      list: true,
                      ui: {
                        itemProps: (item) => {
                          return { name: `${item?.title} `}
                        },
                        defaultItem: {
                          title: "Education",
                          icon: "ti-vector",
                          content : "lorem ipsum",
                          highlighted : false,
                        }
                      },
                      fields:[
                          {
                              name: 'title',
                              label: 'Titre',
                              type: 'string',
                          },
                          {
                              name: 'icon',
                              label: 'Logo',
                              type: 'image',
                          },
                          {
                              name: 'content',
                              label: 'Texte',
                              type: 'string',
                          },
                          {
                              name: 'highlighted',
                              label: 'Highlight',
                              type: 'boolean',
                          },
                      ],
                  }
              ]
          },
          {
              name: 'portfolio',
              label: 'Portfolio',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
                  {
                      name: 'item_show',
                      label: 'Nombre de Portfolio afficher',
                      type: 'number',
                  },
              ],
          },
          {
              name: 'testimonial',
              label: 'Testimoni',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
                  {
                      name: 'item',
                      label: 'Testimoni',
                      type: 'object',
                      list: true,
                      ui: {
                        itemProps: (item) => {
                          return { name: `${item?.name} `}
                        },
                        defaultItem: {
                          name: "lorem",
                          image: "images/testimonial/client-1.png",
                          designation : "lorem ipsum",
                          content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                          },
                      },
                      fields:[
                          {
                              name: 'name',
                              label: 'Nom/Prenom',
                              type: 'string',
                          },
                          {
                              name: 'image',
                              label: 'Image',
                              type: 'image',
                          },
                          {
                              name: 'designation',
                              label: 'Role',
                              type: 'string',
                          },
                          {
                              name: 'content',
                              label: 'Texte',
                              type: 'string',
                              ui: {
                                  component: "textarea"
                              }
                          },
                      ],
                  }
              ]
          },
          {
              name: 'blog',
              label: 'Blog',
              type:'object',
              fields: [
                  {
                      name: 'enable',
                      label: 'Activer',
                      type: 'boolean',
                  },
                  {
                      name: 'title',
                      label: 'Titre',
                      type: 'string',
                  },
              ],
          },
        ],
      },
     
    ],
  },
});
