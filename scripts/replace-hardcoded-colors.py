#!/usr/bin/env python3
"""
Script para substituir cores hardcoded por classes CSS utilitárias
"""

import os
import re
from pathlib import Path

# Mapeamento de cores hardcoded para classes CSS
COLOR_MAPPINGS = {
    # Backgrounds
    r'bg-\[#f8f8f8\]': 'bg-primary-ds',
    r'bg-\[#f5f5f5\]': 'bg-primary-ds',
    r'bg-\[#0f0f0f\]': 'bg-black-ds',
    r'bg-\[#1a1a1a\]': 'bg-black-hover-ds',
    r'bg-\[#82f7b3\]': 'bg-green-ds',
    r'bg-\[#6ee5a1\]': 'bg-green-hover-ds',
    r'bg-white': 'bg-white-ds',
    
    # Backgrounds com opacidades - Verde
    r'bg-\[#82f7b3\]/5': 'bg-green-05',
    r'bg-\[#82f7b3\]/8': 'bg-green-08',
    r'bg-\[#82f7b3\]/10': 'bg-green-10',
    r'bg-\[#82f7b3\]/15': 'bg-green-15',
    r'bg-\[#82f7b3\]/18': 'bg-green-18',
    r'bg-\[#82f7b3\]/20': 'bg-green-20',
    r'bg-\[#82f7b3\]/25': 'bg-green-25',
    r'bg-\[#82f7b3\]/30': 'bg-green-30',
    r'bg-\[#82f7b3\]/35': 'bg-green-35',
    r'bg-\[#82f7b3\]/40': 'bg-green-40',
    r'bg-\[#82f7b3\]/70': 'bg-green-70',
    r'bg-\[#82f7b3\]/90': 'bg-green-90',
    
    # Backgrounds com opacidades - Preto
    r'bg-\[#0f0f0f\]/5': 'bg-black-05',
    r'bg-\[#0f0f0f\]/8': 'bg-black-08',
    r'bg-\[#0f0f0f\]/10': 'bg-black-10',
    r'bg-\[#0f0f0f\]/15': 'bg-black-15',
    r'bg-\[#0f0f0f\]/20': 'bg-black-20',
    
    # Backgrounds com opacidades - Branco
    r'bg-white/5': 'bg-white-05',
    r'bg-white/10': 'bg-white-10',
    r'bg-white/25': 'bg-white-25',
    r'bg-white/40': 'bg-white-40',
    r'bg-white/70': 'bg-white-70',
    r'bg-white/80': 'bg-white-80',
    
    # Texto
    r'text-\[#0f0f0f\](?!/\d)': 'text-primary-ds',
    r'text-\[#82f7b3\](?!/\d)': 'text-green-ds',
    r'text-\[#6ee5a1\]': 'text-green-hover-ds',
    r'text-white(?!\-)': 'text-white-ds',
    
    # Texto com opacidades - Preto
    r'text-\[#0f0f0f\]/80': 'text-black-80',
    r'text-\[#0f0f0f\]/75': 'text-black-75',
    r'text-\[#0f0f0f\]/70': 'text-black-70',
    r'text-\[#0f0f0f\]/60': 'text-black-60',
    r'text-\[#0f0f0f\]/50': 'text-black-50',
    r'text-\[#0f0f0f\]/40': 'text-black-40',
    r'text-\[#0f0f0f\]/35': 'text-black-35',
    r'text-\[#0f0f0f\]/30': 'text-black-30',
    r'text-\[#0f0f0f\]/25': 'text-black-25',
    
    # Texto com opacidades - Verde
    r'text-\[#82f7b3\]/70': 'text-green-70',
    
    # Bordas
    r'border-\[#0f0f0f\](?!/\d)': 'border-primary-ds',
    r'border-\[#82f7b3\](?!/\d)': 'border-green-ds',
    r'border-\[#6ee5a1\]': 'border-green-hover-ds',
    
    # Bordas com opacidades - Preto
    r'border-\[#0f0f0f\]/5': 'border-black-05',
    r'border-\[#0f0f0f\]/8': 'border-black-08',
    r'border-\[#0f0f0f\]/10': 'border-black-10',
    r'border-\[#0f0f0f\]/15': 'border-black-15',
    r'border-\[#0f0f0f\]/20': 'border-black-20',
    r'border-\[#0f0f0f\]/25': 'border-black-25',
    
    # Bordas com opacidades - Verde
    r'border-\[#82f7b3\]/8': 'border-green-08',
    r'border-\[#82f7b3\]/10': 'border-green-10',
    r'border-\[#82f7b3\]/15': 'border-green-15',
    r'border-\[#82f7b3\]/20': 'border-green-20',
    r'border-\[#82f7b3\]/25': 'border-green-25',
    r'border-\[#82f7b3\]/30': 'border-green-30',
    r'border-\[#82f7b3\]/35': 'border-green-35',
    r'border-\[#82f7b3\]/40': 'border-green-40',
    
    # Bordas com opacidades - Branco
    r'border-white/25': 'border-white-25',
    
    # Focus rings
    r'focus:ring-\[#82f7b3\]/20': 'focus:ring-green-20',
}

def replace_colors_in_file(file_path):
    """Substitui cores hardcoded em um arquivo"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        replacements_made = 0
        
        # Aplicar todas as substituições
        for pattern, replacement in COLOR_MAPPINGS.items():
            new_content = re.sub(pattern, replacement, content)
            if new_content != content:
                replacements_made += len(re.findall(pattern, content))
                content = new_content
        
        # Salvar apenas se houve mudanças
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return replacements_made
        
        return 0
    except Exception as e:
        print(f"Erro ao processar {file_path}: {e}")
        return 0

def main():
    """Processa todos os arquivos JSX no projeto"""
    src_dir = Path(__file__).parent.parent / 'src'
    
    total_files = 0
    total_replacements = 0
    
    # Processar todos os arquivos .jsx
    for jsx_file in src_dir.rglob('*.jsx'):
        replacements = replace_colors_in_file(jsx_file)
        if replacements > 0:
            total_files += 1
            total_replacements += replacements
            print(f"✓ {jsx_file.relative_to(src_dir)}: {replacements} substituições")
    
    print(f"\n✅ Concluído!")
    print(f"📁 Arquivos modificados: {total_files}")
    print(f"🎨 Total de substituições: {total_replacements}")

if __name__ == '__main__':
    main()

