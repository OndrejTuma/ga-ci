#!/bin/sh -l

cd $GITHUB_WORKSPACE

yarn install

ls -l

yarn print:stuff

#echo "::set-output name=time::$time"