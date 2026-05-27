import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'snackproteico.com.br' },
  },

  singletons: {
    hero: singleton({
      label: '🏠 Hero & Barra de Anúncio',
      path: 'content/hero/',
      format: { data: 'yaml' },
      schema: {
        announcement: fields.text({
          label: 'Texto da barra de anúncio',
          description: 'Barra escura no topo da página',
        }),
        announcement_url: fields.url({
          label: 'URL da barra de anúncio',
        }),
        headline: fields.text({
          label: 'Headline principal (H1)',
          multiline: true,
        }),
        subtitle: fields.text({
          label: 'Subtítulo do hero',
          multiline: true,
        }),
        cta_primary: fields.text({
          label: 'Botão primário',
        }),
        cta_kit: fields.text({
          label: 'Botão secundário (Kit)',
        }),
      },
    }),
  },

  collections: {
    faqs: collection({
      label: '❓ FAQ',
      path: 'content/faqs/*',
      format: { data: 'yaml' },
      slugField: 'question',
      schema: {
        question: fields.slug({
          name: {
            label: 'Pergunta',
          },
        }),
        answer: fields.text({
          label: 'Resposta',
          multiline: true,
        }),
        order: fields.integer({
          label: 'Ordem de exibição',
          defaultValue: 99,
        }),
      },
    }),

    differentials: collection({
      label: '⭐ Diferenciais (Por que Crispy Wise?)',
      path: 'content/differentials/*',
      format: { data: 'yaml' },
      slugField: 'title',
      schema: {
        icon: fields.text({
          label: 'Emoji / Ícone',
        }),
        title: fields.slug({
          name: {
            label: 'Título',
          },
        }),
        body: fields.text({
          label: 'Texto explicativo',
          multiline: true,
        }),
        order: fields.integer({
          label: 'Ordem',
          defaultValue: 99,
        }),
      },
    }),
  },
})
