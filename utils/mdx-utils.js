import { api } from '../services/api';

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 

    if (data) {
        return data;
    }

    return [];
}

export const getPostBySlug = async (slug) => {
    // Busca um post específico usando o slug
    const { data, error } = await api.get(`/posts?slug=eq.${slug}&select=title`);

    if (error) {
        console.error('Erro ao buscar post:', error);
        return {};
    }

    if (data && data.length > 0) {
         // Retorna o primeiro post
        return data[0];
    }

    return {};
}
