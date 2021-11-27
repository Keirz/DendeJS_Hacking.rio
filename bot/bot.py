#!/usr/bin/env python
# -*- coding: utf-8 -*-
# This program is dedicated to the public domain under the CC0 license.


from dotenv import dotenv_values
config = dotenv_values(".env")
import logging


from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)


# Define a few command handlers. These usually take the two arguments update and
# context. Error handlers also receive the raised TelegramError object in error.
def start(update, context):
    """Send a message when the command /start is issued."""
    update.message.reply_text('Olá! Como posso te ajudar?')


def help(update, context):
    """Send a message when the command /help is issued."""
    update.message.reply_text("Digite o problema, estou aqui para te ajudar!")


state = 0
def echo(update, context):
    global state 
    """Echo the user message."""
    #update.message.reply_text(update.message.text)
    message = update.message.text
    if state == 0:
        update.message.reply_text("Olá! O que deseja?\n1 - Lista de cursos\n2 - Falar com alguém\n3 - Recomendação de cursos\n...")
        state = 1
    elif state == 1:
            if message == "1":
                update.message.reply_text("Lista de cursos:\n Consultoria\n Marketing\n Empreendedorismo\n Gestão Financeira\n Gestão de Pessoas\n Administração\n Vendas")
                state = 2
            elif message == "2":
                update.message.reply_text("Aguarde que irei chamar um de nossos atendentes")
                state = 3
            elif message == "3":
                update.message.reply_text("Digite a área de estudo que deseja:")
                state = 4
            else:
                update.message.reply_text("Não entendi! Digite a opção desejada!\n1.Lista de cursos\n2.Falar com alguem\n3.Recomendação de cursos\n...")
    elif state == 2:
        update.message.reply_text("Aguarde que irei direcioná-lo a página do curso")
    elif state == 3:
        update.message.reply_text("Segundo o seu perfil, as melhores opções para você são:\n (Opção1)\n (Opção2)\n (Opção3)")


def error(update, context):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, context.error)


def aviso(update, context):
    "Send a message when the user didnt go to class or something"
    update.message.reply_text("Vi que você não foi a aula! Tá tudo bem? Quer conversar?")


def aula_workshop(update, context):
    "Send a message when something important will happen"
    update.message.reply_text("Ei! Passei aqui para lembrar você que (dia tal, horas tal) vai ter (um evento), que esse evento contribua bastante para o sucesso de nossos alunos! Veja aqui o depoimento de um aluno que participou desse evento: (link)")

def cadastro(update, context):
    "Send a message when the user first logins in the site"
    update.message.reply_text("Olá! Bem-vindo ao Dende Education! Sou a Sebrina, sua assistente virtual! Espero poder ajudá-lo na sua jornada!")


def main():
    """Start the bot."""
    updater = Updater(config['TOKEN_TELEGRAM'], use_context=True)
    dp = updater.dispatcher
    # on different commands - answer in Telegram
    dp.add_handler(CommandHandler("start", start))
    dp.add_handler(CommandHandler("help", echo))
    dp.add_handler(CommandHandler("cursos", echo))
    dp.add_handler(CommandHandler("atendimento", echo))
    dp.add_error_handler(error)


    # Tratamento quando chega alguma mensagem
    #dp.add_handler(MessageHandler(Filters.text, echo))
    dp.add_handler(MessageHandler(Filters.text, echo))


    # Start the Bot
    updater.start_polling()
    # Deixa o bot rodando
    updater.idle()


if __name__ == '__main__':
    main()