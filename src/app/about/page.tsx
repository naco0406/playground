'use client'

import { Box, Container, Heading, Text, SimpleGrid, Button, Badge, Separator } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { ProjectMetadata, siteMetadata } from './metadata'
import { Naco } from '@/components/common/logo/Naco'

const MotionBox = motion(Box)

const ProjectCard = ({ project }: { project: ProjectMetadata }) => {
    const statusColors = {
        completed: 'green',
        'in-progress': 'yellow',
        planned: 'gray',
        pending: 'red'
    }

    return (
        <MotionBox
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            as="article"
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ shadow: 'lg' }}
            bg="white"
            position="relative"
        >
            <Badge
                position="absolute"
                top={4}
                right={4}
                colorPalette={statusColors[project.status]}
            >
                {project.status.toUpperCase()}
            </Badge>

            <Heading color="black" size="md" mb={2}>
                {project.title}
            </Heading>
            <Text color="gray.400" mb={4}>
                {project.description}
            </Text>

            {project.path && (
                <Link href={project.path} passHref>
                    <Button size="sm" color="black" variant="outline">
                        Explore →
                    </Button>
                </Link>
            )}

            {project.children && project.children.length > 0 && (
                <Box mt={4}>
                    <Text fontSize="sm" color="black" fontWeight="bold" mb={2}>
                        Sub-projects:
                    </Text>
                    <SimpleGrid>
                        {project.children.map((child) => (
                            <Link key={child.path} href={child.path ? child.path : '#'} passHref>
                                <Box
                                    p={2}
                                    borderRadius="md"
                                    bg="gray.50"
                                    _hover={{ bg: 'gray.200' }}
                                    cursor="pointer"
                                >
                                    <Text fontSize="sm" color="black" fontWeight="medium">
                                        {child.title}
                                    </Text>
                                </Box>
                            </Link>
                        ))}
                    </SimpleGrid>
                </Box>
            )}
        </MotionBox>
    )
}

const ProjectSection = ({ title, projects }: { title: string; projects: ProjectMetadata[] }) => {
    if (projects.length === 0) return null;

    return (
        <Box mt={8}>
            <Heading size="lg" mb={6} color="gray.700">
                {title}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
                <AnimatePresence>
                    {projects.map((project) => (
                        <MotionBox
                            key={project.path}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </MotionBox>
                    ))}
                </AnimatePresence>
            </SimpleGrid>
        </Box>
    );
};

export default function About() {
    const inProgressProjects = siteMetadata.filter(p => p.status === 'in-progress');
    const completedProjects = siteMetadata.filter(p => p.status === 'completed');
    const pendingProjects = siteMetadata.filter(p => p.status === 'pending');
    const plannedProjects = siteMetadata.filter(p => p.status === 'planned');

    return (
        <Box minH="100vh" py={20} bg="gray.50">
            <Container maxW="container.xl">
                <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    mb={16}
                    textAlign="center"
                >
                    <Link href="/">
                        <Box cursor="pointer">
                            <Naco width={200} color="#000000" />
                        </Box>
                    </Link>
                    <Text color="gray.600" fontSize="xl">
                        뭔가를 만듭니다. 아주 열심히.
                    </Text>
                </MotionBox>

                <ProjectSection title="In Progress" projects={inProgressProjects} />
                {inProgressProjects.length > 0 && <Separator my={8} />}

                <ProjectSection title="Completed" projects={completedProjects} />
                {completedProjects.length > 0 && <Separator my={8} />}

                <ProjectSection title="Pending" projects={pendingProjects} />
                {pendingProjects.length > 0 && <Separator my={8} />}

                <ProjectSection title="Planned" projects={plannedProjects} />
            </Container>
        </Box>
    )
}