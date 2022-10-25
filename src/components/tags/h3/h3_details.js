export const h3_details = {
  title: "H3",
  codeSnippet: `
    export const H3 = (props) => {
        const { text, classes, styles, children } = props;

        return (
            <h3 className={classes} style={styles} {...props}>
                {children || text || "Title 3"}
            </h3>
        );
    };
      `,

  author: {
    name: "Juan Sebastian Mendoza",
    profession: "Software Developer",
    github_image_url: "https://github.com/JuanSebastianM.png",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/JuanSebastianM",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/juan-sebastian-mendoza-perez/",
      },
      { name: "Twitter", url: "https://twitter.com/JuanMendozaDev" },
      { name: "Hashnode", url: "https://hashnode.com/@JuanMendozaDev" },
      { name: "Blog", url: "https://juansebastian.hashnode.dev" },
    ],
    socials_theme: {
      tailwind_bg_color: "bg-pink-400",
      tailwind_text_color: "text-white",
    },
  },
};
