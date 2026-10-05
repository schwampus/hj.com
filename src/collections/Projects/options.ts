export const projectTypeOptions = [
  { label: 'Web app', value: 'web-app' },
  { label: 'Website', value: 'website' },
  { label: 'Mobile app', value: 'mobile-app' },
  { label: 'School project', value: 'school' },
  { label: 'Client work', value: 'client-work' },
]

export const techStackOptions = [
  { label: 'React', value: 'react' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'MongoDB', value: 'ongodb' },
  { label: 'MYSQL', value: 'mysql' },
  { label: 'Postgres', value: 'postgres' },
  { label: 'Docker', value: 'docker' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Vue', value: 'vue' },
  { label: 'Vite', value: 'vite' },
  { label: 'React Native', value: 'react-native' },
]

export const getLabel = (options: { label: string; value: string }[], value: string) =>
  options.find((option) => option.value === value)?.label ?? value
