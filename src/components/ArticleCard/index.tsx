import { IconBookmark, IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  rem,
} from "@mantine/core";
import classes from "./ArticleCard.module.css";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  link: string;
  tag: string;
  user: {
    avatar: string;
    name: string;
  };
};

export function ArticleCard(props: Props) {
  const { description, link, tag, thumbnail, title, user } = props;

  const linkProps = {
    href: "/blog",
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <a {...linkProps}>
          <Image
            src={thumbnail || "https://i.imgur.com/Cij5vdL.png"}
            height={180}
            className="aspect-[3/2]"
            alt=""
          />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {tag || "outstanding"}
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src={
              user.avatar ||
              "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            }
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            {user.name}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.red[2]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[2]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[2]}
            />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
