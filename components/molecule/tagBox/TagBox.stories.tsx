import { Meta, Story } from "@storybook/react/types-6-0";
import { TagBox, TagBoxProps } from "../../molecule/tagBox/TagBox";

const src =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxOCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjcwNzEgMS43MDcxMUMxOC4wOTc2IDEuMzE2NTggMTguMDk3NiAwLjY4MzQxOCAxNy43MDcxIDAuMjkyODkzQzE3LjMxNjYgLTAuMDk3NjMxMSAxNi42ODM0IC0wLjA5NzYzMTEgMTYuMjkyOSAwLjI5Mjg5M0wxNy43MDcxIDEuNzA3MTFaTTkgOUw4LjI5Mjg5IDkuNzA3MTFDOC40ODA0MyA5Ljg5NDY0IDguNzM0NzggMTAgOSAxMEM5LjI2NTIyIDEwIDkuNTE5NTcgOS44OTQ2NCA5LjcwNzExIDkuNzA3MTFMOSA5Wk0xLjcwNzExIDAuMjkyODkzQzEuMzE2NTggLTAuMDk3NjMxNSAwLjY4MzQxNyAtMC4wOTc2MzE2IDAuMjkyODkzIDAuMjkyODkzQy0wLjA5NzYzMTIgMC42ODM0MTcgLTAuMDk3NjMxMyAxLjMxNjU4IDAuMjkyODkzIDEuNzA3MTFMMS43MDcxMSAwLjI5Mjg5M1pNMTYuMjkyOSAwLjI5Mjg5M0w4LjI5Mjg5IDguMjkyODlMOS43MDcxMSA5LjcwNzExTDE3LjcwNzEgMS43MDcxMUwxNi4yOTI5IDAuMjkyODkzWk05LjcwNzExIDguMjkyODlMMS43MDcxMSAwLjI5Mjg5M0wwLjI5Mjg5MyAxLjcwNzExTDguMjkyODkgOS43MDcxMUw5LjcwNzExIDguMjkyODlaIiBmaWxsPSIjOUQ5RDlEIi8+Cjwvc3ZnPgo=";

const tags = [
  { id: 1, value: "성향태그1" },
  { id: 2, value: "성향태그2" },
  { id: 3, value: "성향태그3" },
  { id: 4, value: "성향태그4" },
];
export default {
  title: "molecule/TagBox",
  component: TagBox,
} as Meta;

const Template: Story<TagBoxProps> = (args) => {
  return <TagBox {...args} />;
};

export const Tagbox = Template.bind({});
Tagbox.args = {
  tags: tags,
  src: src,
};
